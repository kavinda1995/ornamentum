import { Component } from '@angular/core';

import { DataTableExampleDataModel } from '../../../../../../shared/models';

import { TableDataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-filter-text-box-usage',
  templateUrl: './filter-text-box-usage.component.html'
})
export class FilterTextBoxUsageComponent {
  public items: DataTableExampleDataModel[];

  constructor(private tableDataFetchService: TableDataFetchService) {
    this.items = this.tableDataFetchService.getTableData();
  }
}
