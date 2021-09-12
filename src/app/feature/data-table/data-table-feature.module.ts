import { NgModule } from '@angular/core';

import { DataTableFeatureRoutingModule } from './data-table-feature-routing.module';
import { CustomTestingComponent } from './testing/custom-testing/custom-testing.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DataTableModule } from 'ornamentum';

/**
 * Module class for containing data table feature module.
 */
@NgModule({
  declarations: [CustomTestingComponent],
  exports: [],
  imports: [
    DataTableFeatureRoutingModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot()
  ],
  providers: []
})
export class DataTableFeatureModule {
}
