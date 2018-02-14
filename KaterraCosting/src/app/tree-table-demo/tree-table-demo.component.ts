import { Component, OnInit } from '@angular/core';

import {TreeTableModule} from 'primeng/treetable';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

import {ContextMenuModule} from 'primeng/contextmenu';
import {TreeNode } from 'primeng/api';
import { NodeService } from '../node.service';
import {Http} from '@angular/http';
import {SharedModule, DataTableModule} from 'primeng/primeng';
import {ConfirmationService} from 'primeng/api';

@Component({
  templateUrl: './tree-table-demo.component.html',
  styleUrls: ['./tree-table-demo.component.css'],
  providers: [NodeService],
})
export class TreeTableDemoComponent implements OnInit {
    msgs = [];
    selectedFiles: TreeNode[];
    items: MenuItem[];
    datastring = 'name';
    showdata = false ;
    text: string ;
  private files: TreeNode[]  =  [
        {
            "data":{  
                "name":"Documents",
                "size":"75kb",
                "type":"Folder"
            },
            "children":[
                {  
                    "data":{  
                        "name":"Work",
                        "size":"55kb",
                        "type":"Folder"
                    },
                    "children":[  
                        {  
                            "data":{  
                                "name":"Expenses.doc",
                                "size":"30kb",
                                "type":"Document"
                            }
                        },
                        {  
                            "data":{  
                                "name":"Resume.doc",
                                "size":"25kb",
                                "type":"Resume"
                            }
                        }
                    ]
                },
                {  
                    "data":{  
                        "name":"Home",
                        "size":"20kb",
                        "type":"Folder"
                    },
                    "children":[  
                        {  
                            "data":{  
                                "name":"Invoices",
                                "size":"20kb",
                                "type":"Text"
                            }
                        }
                    ]
                }
            ]
        },
        {  
            "data":{  
                "name":"Pictures",
                "size":"150kb",
                "type":"Folder"
            },
            "children":[  
                {  
                    "data":{  
                        "name":"barcelona.jpg",
                        "size":"90kb",
                        "type":"Picture"
                    }
                },
                {  
                    "data":{  
                        "name":"primeui.png",
                        "size":"30kb",
                        "type":"Picture"
                    }
                },
                {  
                    "data":{  
                        "name":"optimus.jpg",
                        "size":"30kb",
                        "type":"Picture"
                    }
                }
            ]
        }
    ]
;
  cols: any [];
  cols1: any [];

  constructor(private nodeService: NodeService, private confirmationService: ConfirmationService) {
  }
  ngOnInit() {
     this.nodeService.getFilesystem().then(files => this.files = files);
     this.cols = Object.keys(this.files[0].data);
     this.cols1  = Object.keys(this.files[0].data);

     this.items = [
        {label: 'Add New Column', icon: 'fa-plus', command: (event) => this.addColumn('price')},
        {label: 'Delete Column', icon: 'fa-close', command: (event) => this.removeColumn('price')}
    ];
    console.log(JSON.stringify(this.files));
}

addColumn(colname: string): void {

                                    // for (const i of this.files) {
                                    //     i.data[colname] = 'abc';
                                    //     for ( const k of i.children) {
                                    //                                     k.data[colname] = 'abc';
                                    //                                 }
                                    //                         }
                                                            this.cols.push(colname);
                                                            console.log(JSON.stringify(this.files));
                                                        }
 git (colname: string): void {
   this.cols.splice( this.cols.indexOf(colname), 1);
   console.log(JSON.stringify(this.files));
 }


nodeSelect(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.size});
}

nodeUnselect(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.data.name});
}



confirm() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
            //Actual logic to perform a confirmation
        }
    });
}
}
