import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';
import {} from 'rxjs/add/operator/toPromise';

@Injectable()
export class NodeService {

  constructor(private http: Http) {}

  getFilesystem() {
      return this.http.get('assets/filessystem.json')
                  .toPromise()
                  .then(res => <TreeNode[]> res.json().data);
  }
}
