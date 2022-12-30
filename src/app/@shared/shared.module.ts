import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
/*----------------------   Imports  ----------------------*/
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


import * as Shared from './index';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgbCollapseModule
  ],
  declarations: [
    ...Shared.pipes,
    ...Shared.components,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ...Shared.pipes,
    ...Shared.components
  ]
})
export class SharedModule {
}
