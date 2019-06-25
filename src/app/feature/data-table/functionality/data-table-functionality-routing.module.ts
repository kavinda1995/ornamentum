import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent data table functionality routes.
 */
const dataTableFunctionalityRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pagination'
  },
  {
    loadChildren: () => import('./data-table-pagination/data-table-pagination.module')
      .then((m) => m.DataTablePaginationModule),
    path: 'pagination',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Pagination',
        keywords: 'Pagination, Pageable, Ornamentum, How to enable Pagination in Ornamentum',
        description:
          'How to enable pagination for the Ornamentum data table, everything to do with pagination and related properties, with examples.'
      }
    }
  },
  {
    loadChildren: () => import('./data-table-sorting/data-table-sorting.module')
      .then((m) => m.DataTableSortingModule),
    path: 'column/sorting',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Sorting',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: () => import('./data-table-row-grouping/data-table-row-grouping.module')
      .then((m) => m.DataTableRowGroupingModule),
    path: 'row/grouping',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Row | Grouping',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: () => import('./data-table-filtering/data-table-filtering.module')
      .then((m) => m.DataTableFilteringModule),
    path: 'column/filtering',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Filtering',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
  {
    loadChildren: () => import('./data-table-row-selection/data-table-row-selection.module')
      .then((m) => m.DataTableRowSelectionModule),
    path: 'row/selection',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum | Data Table | Functionality | Row | Selection',
        keywords: '<--add keywords here-->',
        description: '<--add description here-->'
      }
    }
  },
];

/**
 * Data table functionality routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableFunctionalityRoutes)]
})
export class DataTableFunctionalityRoutingModule {
}
