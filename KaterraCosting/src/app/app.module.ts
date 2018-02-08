import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TreeTableDemoComponent } from './tree-table-demo/tree-table-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeTableDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
