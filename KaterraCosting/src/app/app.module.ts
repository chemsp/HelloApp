import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import {TableModule} from 'primeng/table';


import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';

import { AppComponent } from './app.component';
import { TreeTableDemoComponent } from './tree-table-demo/tree-table-demo.component';
import { NodeService } from './node.service';

@NgModule({
  declarations: [
    AppComponent,
    TreeTableDemoComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, TreeTableModule, HttpModule, TableModule,
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
