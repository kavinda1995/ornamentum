import { Component, OnInit } from '@angular/core';
import { ExampleData } from 'helper-models';
import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-custom-testing',
  templateUrl: './custom-testing.component.html',
  styleUrls: ['./custom-testing.component.scss']
})
export class CustomTestingComponent implements OnInit {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  ngOnInit() {
  }

}
