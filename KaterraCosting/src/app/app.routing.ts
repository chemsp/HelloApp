import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { TreeTableDemoComponent } from './tree-table-demo/tree-table-demo.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: TreeTableDemoComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ] , { preloadingStrategy: PreloadAllModules })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
