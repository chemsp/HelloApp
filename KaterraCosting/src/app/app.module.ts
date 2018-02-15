import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import {TableModule} from 'primeng/table';
import {MenuModule} from 'primeng/menu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {SharedModule, DataTableModule} from 'primeng/primeng';
import {EditorModule} from 'primeng/editor';

import {ContextMenuModule, ContextMenu} from 'primeng/contextmenu';

import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';

import { AppComponent } from './app.component';
import { TreeTableDemoComponent } from './tree-table-demo/tree-table-demo.component';
import { NodeService } from './node.service';
import { FilterPipeModule } from 'ngx-filter-pipe';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { ProjectscopeComponent } from './projectscope/projectscope.component';
import {PickListModule } from 'primeng/picklist';

@NgModule({
  declarations: [
    AppComponent,
    TreeTableDemoComponent,
    ProjectscopeComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, TreeTableModule, HttpModule, TableModule, ContextMenuModule, MenuModule,
    TieredMenuModule, SharedModule, DataTableModule, FormsModule, CommonModule, EditorModule, FilterPipeModule,
     ConfirmDialogModule, PickListModule
  ],
  providers: [NodeService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
