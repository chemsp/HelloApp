import { Component, OnInit } from '@angular/core';
import {TreeTableModule} from 'primeng/treetable';
import {TreeNode } from 'primeng/api';
import { NodeService } from '../node.service';
import {Http} from '@angular/http';

import {} from 'rxjs/add/operator/toPromise';
@Component({
  templateUrl: './tree-table-demo.component.html',
  styleUrls: ['./tree-table-demo.component.css'],
  providers: [NodeService],
})
export class TreeTableDemoComponent implements OnInit {

  files: TreeNode[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
     this.nodeService.getFilesystem().then(files => this.files = files);
  }
}
