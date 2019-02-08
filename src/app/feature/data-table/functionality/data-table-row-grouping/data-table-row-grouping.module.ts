import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import { DataTableRowGroupingRoutingModule } from './data-table-row-grouping-routing.module';

import { SharedModule } from '../../../../shared/shared.module';

import { DataTableRowGroupingComponent, RowGroupingUsageComponent } from './index';

/**
 * Module class for containing data table row grouping module.
 */
@NgModule({
  declarations: [DataTableRowGroupingComponent, RowGroupingUsageComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableRowGroupingRoutingModule
  ],
  providers: []
})
export class DataTableRowGroupingModule {
}
