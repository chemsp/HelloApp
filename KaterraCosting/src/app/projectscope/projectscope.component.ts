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

import {PickListModule } from 'primeng/picklist';
import { debuglog } from 'util';

@Component({
  selector: 'app-projectscope',
  templateUrl: './projectscope.component.html',
  styleUrls: ['./projectscope.component.css']
})
export class ProjectscopeComponent implements OnInit {

  list1: any[];
  list2: any[];
  cols: string[] = [];
  cols1: string[] = [];
  selectedFiles: TreeNode[];
  selectedFiles1: TreeNode[];
  files: TreeNode[]  =  [
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
];

  ngOnInit() {
      this.list1 = this.files;

      this.cols = Object.keys(this.list1[0].data);

  }

  exportMethod(): void {
  let  smarray: any[];
       if (typeof this.list2 !== 'undefined' && this.list2) {
       smarray = this.list2.concat(this.selectedFiles);
       this.list2 = smarray.map(x => Object.assign({}, x));
       } else {

        this.list2 = this.selectedFiles.map(x => Object.assign({}, x));
      }
     debugger;
        this.cols1 = Object.keys(this.list2[0].data);
  }

}
