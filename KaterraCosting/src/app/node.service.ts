import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';

@Injectable()
export class NodeService {

  constructor(private http: Http) {}

  getFilesystem() {
      return this.http.get('showcase/resources/data/filesystem.json')
                  .toPromise()
                  .then(res => <TreeNode[]> res.json().data);
  }
}
