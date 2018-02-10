import { Component, OnInit } from '@angular/core';
import {TreeTableModule} from 'primeng/treetable';
import {TreeNode } from 'primeng/api';
import { NodeService } from '../node.service';
import {Http} from '@angular/http';

@Component({
  templateUrl: './tree-table-demo.component.html',
  styleUrls: ['./tree-table-demo.component.css'],
  providers: [NodeService],
})
export class TreeTableDemoComponent implements OnInit {

  files: TreeNode[];
  cols: any[];
  constructor(private nodeService: NodeService) {}

  ngOnInit() {
     this.nodeService.getFilesystem().then(files => this.files = files);

     this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
       ];
           }

addColumn(): void {

  this.cols.push( { field: 'vin', header: 'Vin' });

}

}
