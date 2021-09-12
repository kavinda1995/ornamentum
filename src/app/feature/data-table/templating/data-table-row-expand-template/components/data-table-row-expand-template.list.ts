import { ExampleFile, FileType } from 'helper-models';

export const rowExpandTemplateUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'row-expand-template-usage.component.ts',
    content: require('!!raw-loader!./example/row-expand-template-usage/row-expand-template-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'row-expand-template-usage.component.html',
    content: require('!!raw-loader!./example/row-expand-template-usage/row-expand-template-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'row-expand-template-usage.module.ts',
    content: require('!!raw-loader!./example/row-expand-template-usage/row-expand-template-usage.module.md')
  }
];

export const rowExpandTemplateDetailView: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'row-expand-template-detail-view.component.ts',
    content: require('!!raw-loader!./example/row-expand-template-usage/row-expand-template-detail-view/' +
      'row-expand-template-detail-view.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'row-expand-template-detail-view.component.html',
    content: require('!!raw-loader!./example/row-expand-template-usage/row-expand-template-detail-view/' +
      'row-expand-template-detail-view.component.html')
  }
];

export const expandOnRowClickUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'expand-on-row-click-usage.component.ts',
    content: require('!!raw-loader!./example/expand-on-row-click-usage/expand-on-row-click-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'expand-on-row-click-usage.component.html',
    content: require('!!raw-loader!./example/expand-on-row-click-usage/expand-on-row-click-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'expand-on-row-click-usage.module.ts',
    content: require('!!raw-loader!./example/expand-on-row-click-usage/expand-on-row-click-usage.module.md')
  }
];

export const showRowExpandLoadingSpinnerUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'show-row-expand-loading-spinner-usage.component.ts',
    content: require(
      '!!raw-loader!./example/show-row-expand-loading-spinner-usage/show-row-expand-loading-spinner-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'show-row-expand-loading-spinner-usage.component.html',
    content: require('!!raw-loader!./example/show-row-expand-loading-spinner-usage/show-row-expand-loading-spinner-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'show-row-expand-loading-spinner-usage.module.ts',
    content: require('!!raw-loader!./example/show-row-expand-loading-spinner-usage/show-row-expand-loading-spinner-usage.module.md')
  }
];

export const showRowExpandLoadingSpinnerDetailView: ExampleFile[] = [
  // {
  //   type: FileType.TS,
  //   name: 'show-row-expand-loading-spinner-detail-view.component.ts',
  //   content: require('!!raw-loader!./example/show-row-expand-loading-spinner-usage/show-row-expand-loading-spinner-detail-view/' +
  //     'show-row-expand-loading-spinner-detail-view.component.ts')
  // },
  // {
  //   type: FileType.HTML,
  //   name: 'show-row-expand-loading-spinner-detail-view.component.html',
  //   content: require('!!raw-loader!./example/show-row-expand-loading-spinner-usage/show-row-expand-loading-spinner-detail-view/' +
  //     'show-row-expand-loading-spinner-detail-view.component.html')
  // }
];

export const demoSnippet: any = {
  baseTemplate: require('!!raw-loader!./docs/base-template.md'),
  expandTemplate: require('!!raw-loader!./docs/expand-template.md'),
  dataLoadingTemplate: require('!!raw-loader!./docs/data-loading-template.md')
};
