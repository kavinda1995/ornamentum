import { Component, OnInit } from '@angular/core';
import { ExampleData } from 'helper-models';
import { DataFetchService } from 'helper-services';
import { DataTableFilterOption } from '../../../../../../projects/ornamentum/src';

@Component({
  selector: 'app-custom-testing',
  templateUrl: './custom-testing.component.html',
  styleUrls: ['./custom-testing.component.scss']
})
export class CustomTestingComponent implements OnInit {
  public items: ExampleData[];
  public dropdownFilterItems: Array<DataTableFilterOption> = [];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
    const productLineSet = new Set();
    this.items.forEach((item) => productLineSet.add(item.productLine));
    productLineSet.forEach((item) => {
      this.dropdownFilterItems.push({
        key: item,
        value: `Product Line - ${item}`
      });
    });
  }

  ngOnInit() {
  }

}
