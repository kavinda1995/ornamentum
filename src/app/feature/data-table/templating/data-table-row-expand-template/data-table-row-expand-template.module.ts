import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableRowExpandTemplateRoutingModule } from './data-table-row-expand-template-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import {
  DataTableRowExpandTemplateComponent,
  RowExpandTemplateUsageComponent,
  RowExpandTemplateDetailViewComponent,
  ShowRowExpandLoadingSpinnerUsageComponent,
  ExpandOnRowClickUsageComponent,
} from './index';

/**
 * Module class for containing data table row expand template module.
 */
@NgModule({
  declarations: [
    DataTableRowExpandTemplateComponent,
    RowExpandTemplateUsageComponent,
    RowExpandTemplateDetailViewComponent,
    ExpandOnRowClickUsageComponent,
    ShowRowExpandLoadingSpinnerUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableRowExpandTemplateRoutingModule
  ],
  providers: []
})
export class DataTableRowExpandTemplateModule {
}
