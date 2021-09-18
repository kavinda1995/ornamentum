import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { MenuGroup, MenuItem, Theme } from '../../../core/models';

import { ScrollService } from '../../../core/services';

/**
 * Component class for showing main view.
 */
@Component({
  selector: 'app-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html'
})
export class MainComponent {
  public themeCssClass: string = Theme.ust;
  public menuGroups: MenuGroup[] = [
    {
      expanded: true,
      name: 'Data Table',
      menuSubGroup: [
        {
          name: 'Overview',
          menuItems: [
            {
              routePath: '/feature/data-table/overview/basic-usage',
              title: 'Basic Usage',
              navigation: [
                {
                  title: 'Advanced Usage',
                  anchor: 'advancedUsage'
                },
                {
                  title: 'Basic Installation',
                  anchor: 'basicInstallation'
                },
                {
                  title: 'Peer Dependencies',
                  anchor: 'peerDependencies'
                },
                {
                  title: 'Functionality',
                  anchor: 'functionality'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Data Binding',
          menuItems: [
            {
              routePath: '/feature/data-table/data-binding/client-side/basic',
              title: 'Client Side Basic',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage',
                  subNavigation: [
                    {
                      title: 'Bind via Items',
                      anchor: 'bindViaItems'
                    },
                    {
                      title: 'Bind via Data Source',
                      anchor: 'bindViaDataSource'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/data-binding/client-side/stream',
              title: 'Client Side Stream',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage',
                  subNavigation: [
                    {
                      title: 'Bind via Data Source',
                      anchor: 'bindViaDataSource'
                    },
                    {
                      title: 'Bind via Items',
                      anchor: 'bindViaItems'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/data-binding/server-side/basic',
              title: 'Servers Side Basic',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Custom Data Provider',
                  anchor: 'customDataProvider'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/data-binding/server-side/web-socket',
              title: 'Server Side Web Socket',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Custom Data Provider',
                  anchor: 'customDataProvider'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/data-binding/custom-provider',
              title: 'Custom Data Provider',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Functionality',
          menuItems: [
            {
              routePath: '/feature/data-table/functionality/column/binding',
              title: 'Column Binding',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'ID (Identifier)',
                      anchor: 'id'
                    },
                    {
                      title: 'Field',
                      anchor: 'field'
                    },
                    {
                      title: 'Title',
                      anchor: 'title'
                    },
                    {
                      title: 'Index Column Title',
                      anchor: 'indexColumnTitle'
                    },
                    {
                      title: 'CSS Class',
                      anchor: 'cssClass'
                    },
                    {
                      title: 'Width',
                      anchor: 'width'
                    },
                    {
                      title: 'Visible',
                      anchor: 'visible'
                    },
                    {
                      title: 'Show In Column Selector',
                      anchor: 'showInColumnSelector'
                    },
                    {
                      title: 'Show Index Column',
                      anchor: 'showIndexColumn'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/functionality/pagination',
              title: 'Pagination',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Page',
                      anchor: 'page'
                    },
                    {
                      title: 'Limit',
                      anchor: 'limit'
                    }
                  ]
                },
                {
                  title: 'Server Side Pagination',
                  anchor: 'serverSidePagination'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/functionality/column/sorting',
              title: 'Sorting',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Sort Order',
                      anchor: 'sortOrder'
                    },
                    {
                      title: 'Sort Field',
                      anchor: 'sortField'
                    }
                  ]
                },
                {
                  title: 'Multi Column Sortable',
                  anchor: 'multiColumnSortable'
                },
                {
                  title: 'Server Side Sorting',
                  anchor: 'serverSideSorting'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/functionality/column/filtering',
              title: 'Filtering',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Filter Text Box',
                  anchor: 'filterTextBox',
                  subNavigation: [
                    {
                      title: 'Filter Placeholder',
                      anchor: 'filterPlaceholder'
                    },
                    {
                      title: 'Show Filter Clear Button',
                      anchor: 'showFilterClearButton'
                    }
                  ]
                },
                {
                  title: 'Filter Dropdown',
                  anchor: 'filterDropdown'
                },
                {
                  title: 'Server Side Filtering',
                  anchor: 'serverSideFiltering'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/functionality/row/selection',
              title: 'Row Selection',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Select Mode',
                      anchor: 'selectMode'
                    },
                    {
                      title: 'Show Row Select Checkbox',
                      anchor: 'showRowSelectCheckbox'
                    },
                    {
                      title: 'Show Row Select All Checkbox',
                      anchor: 'showRowSelectAllCheckbox'
                    },
                    {
                      title: 'Select On Row Click',
                      anchor: 'selectOnRowClick'
                    },
                    {
                      title: 'Select Track By',
                      anchor: 'selectTrackBy'
                    },
                    {
                      title: 'Selected Row',
                      anchor: 'selectedRow'
                    },
                    {
                      title: 'Selected Rows',
                      anchor: 'selectedRows'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Templating',
          menuItems: [
            {
              routePath: '/feature/data-table/templating/cell-template',
              title: 'Cell Template',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Column',
                      anchor: 'column'
                    },
                    {
                      title: 'Row',
                      anchor: 'row'
                    },
                    {
                      title: 'Span Index',
                      anchor: 'spanIndex'
                    },
                    {
                      title: 'Row Span',
                      anchor: 'rowSpan'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/templating/row-expand-template',
              title: 'Row Expand Template',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Row',
                      anchor: 'row'
                    },
                    {
                      title: 'Expand On Row Click',
                      anchor: 'expandOnRowClick'
                    },
                    {
                      title: 'Show Row Expand Loading Spinner',
                      anchor: 'showRowExpandLoadingSpinner'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/templating/data-loading-template',
              title: 'Data Loading Template',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/templating/no-records-template',
              title: 'No Records Template',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Options',
          menuItems: [
            {
              routePath: '/feature/data-table/options/data-loading-spinner',
              title: 'Data Loading Spinner',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/options/substitute-rows',
              title: 'Substitute Rows',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage',
                  subNavigation: [
                    {
                      title: 'Substitute Rows Enabled',
                      anchor: 'substituteRowsEnabled'
                    },
                    {
                      title: 'Substitute Rows Disabled',
                      anchor: 'substituteRowsDisabled'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/options/header-details',
              title: 'Header Details',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Title',
                      anchor: 'title'
                    },
                    {
                      title: 'Show Refresh Button',
                      anchor: 'showRefreshButton'
                    },
                    {
                      title: 'Show Column Selector',
                      anchor: 'showColumnSelector'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Styling',
          menuItems: [
            {
              routePath: '/feature/data-table/styling/responsive-configuration',
              title: 'Responsive Configuration',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Content Height',
                      anchor: 'contentHeight'
                    },
                    {
                      title: 'Width',
                      anchor: 'width'
                    },
                    {
                      title: 'Min Content Height',
                      anchor: 'minContentHeight'
                    },
                    {
                      title: 'Min Content Width',
                      anchor: 'minContentWidth'
                    },
                    {
                      title: 'Expander Column Width',
                      anchor: 'expanderColumnWidth'
                    },
                    {
                      title: 'Index Column Width',
                      anchor: 'indexColumnWidth'
                    },
                    {
                      title: 'Column Selector Width',
                      anchor: 'columnSelectorWidth'
                    },
                    {
                      title: 'Selection Column Width',
                      anchor: 'selectionColumnWidth'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/styling/themes',
              title: 'Themes',
              navigation: [
                {
                  title: 'Predefined Themes',
                  anchor: 'predefinedThemes',
                  subNavigation: [
                    {
                      title: 'Base Theme',
                      anchor: 'baseTheme'
                    },
                    {
                      title: 'Dark Theme',
                      anchor: 'darkTheme'
                    },
                    {
                      title: 'Flat Theme',
                      anchor: 'flatTheme'
                    },
                    {
                      title: 'Ornamentum Theme',
                      anchor: 'ornamentumTheme'
                    },
                    {
                      title: 'Aegean Theme',
                      anchor: 'aegeanTheme'
                    }
                  ]
                }
              ]
            },
            {
              routePath: '/feature/data-table/styling/custom-theming',
              title: 'Custom Theming'
            }
          ]
        },
        {
          name: 'Advanced',
          menuItems: [
            {
              routePath: '/feature/data-table/advanced/events',
              title: 'Events',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Events Hierarchy',
                  anchor: 'eventsHierarchy'
                },
                {
                  title: 'Useful Events',
                  anchor: 'usefulEvents',
                  subNavigation: [
                    {
                      title: 'Column Bind',
                      anchor: 'columnBind'
                    },
                    {
                      title: 'Init',
                      anchor: 'init'
                    },
                    {
                      title: 'Data Bound',
                      anchor: 'dataBound'
                    },
                    {
                      title: 'Row Bind',
                      anchor: 'rowBind'
                    },
                    {
                      title: 'Cell Bind',
                      anchor: 'cellBind'
                    },
                    {
                      title: 'Row Select Change',
                      anchor: 'rowSelectChange'
                    },
                    {
                      title: 'All Row Select Change',
                      anchor: 'allRowSelectChange'
                    },
                    {
                      title: 'Row Click',
                      anchor: 'rowClick'
                    },
                    {
                      title: 'Row Double Click',
                      anchor: 'rowDoubleClick'
                    },
                    {
                      title: 'Cell Click',
                      anchor: 'cellClick'
                    },
                    {
                      title: 'Header Click',
                      anchor: 'headerClick'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/advanced/state-persistence',
              title: 'State Persistence',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Storage Mode',
                      anchor: 'storageMode'
                    },
                    {
                      title: 'State Saving ID',
                      anchor: 'stateId'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/advanced/translations',
              title: 'Translations',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Translations for No Data',
                  anchor: 'translationsForNoData',
                  subNavigation: [
                    {
                      title: 'No Data Message Header',
                      anchor: 'noDataMessageHeader'
                    },
                    {
                      title: 'No Data Message Body',
                      anchor: 'noDataMessageBody'
                    }
                  ]
                },
                {
                  title: 'Translations for Pagination',
                  anchor: 'translationsForPagination',
                  subNavigation: [
                    {
                      title: 'Pagination Limit',
                      anchor: 'paginationLimit'
                    },
                    {
                      title: 'Pagination Range',
                      anchor: 'paginationRange'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/advanced/config-overriding',
              title: 'Configuration Overriding',
              navigation: [
                {
                  title: 'Overriding Hierarchy',
                  anchor: 'overridingHierarchy'
                },
                {
                  title: 'Default Configurations',
                  anchor: 'defaultConfigurations'
                },
                {
                  title: 'Module Property Binding',
                  anchor: 'modulePropertyBinding'
                },
                {
                  title: 'Template Property Binding',
                  anchor: 'templatePropertyBinding'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Experimental',
          menuItems: [
            {
              routePath: '/feature/data-table/experimental/column/resizing',
              title: 'Column Resizing',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/experimental/row/span',
              title: 'Dynamic Row Span',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      expanded: true,
      name: 'Dropdown',
      menuSubGroup: [
        {
          name: 'Overview',
          menuItems: [
            {
              routePath: '/feature/dropdown/overview/basic-usage',
              title: 'Basic Usage',
              navigation: [
                {
                  title: 'Advanced Usage',
                  anchor: 'advancedUsage'
                },
                {
                  title: 'Basic Installation',
                  anchor: 'basicInstallation'
                },
                {
                  title: 'Peer Dependencies',
                  anchor: 'peerDependencies'
                },
                {
                  title: 'Functionality',
                  anchor: 'functionality'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Data Binding',
          menuItems: [
            {
              routePath: '/feature/dropdown/data-binding/client-side/basic',
              title: 'Client Side Basic',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage',
                  subNavigation: [
                    {
                      title: 'Bind via Items',
                      anchor: 'bindViaItems'
                    },
                    {
                      title: 'Bind via Data Source',
                      anchor: 'bindViaDataSource'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/data-binding/client-side/stream',
              title: 'Client Side Stream',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage',
                  subNavigation: [
                    {
                      title: 'Bind via Data Source',
                      anchor: 'bindViaDataSource'
                    },
                    {
                      title: 'Bind via Items',
                      anchor: 'bindViaItems'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/data-binding/server-side/basic',
              title: 'Server Side Basic',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Custom Data Provider',
                  anchor: 'customDataProvider'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/data-binding/server-side/web-socket',
              title: 'Server Side Web Socket',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Custom Data Provider',
                  anchor: 'customDataProvider'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/data-binding/custom-provider',
              title: 'Custom Data Provider',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Functionality',
          menuItems: [
            {
              routePath: '/feature/dropdown/functionality/disabling',
              title: 'Disabling',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/functionality/option/disabling',
              title: 'Option Disabling',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/functionality/option/display-value',
              title: 'Option Display Value',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/functionality/option/selection',
              title: 'Option Selection',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Set First Option Selected',
                      anchor: 'setFirstOptionSelected'
                    },
                    {
                      title: 'Show Option Select Checkbox',
                      anchor: 'showOptionSelectCheckbox'
                    },
                    {
                      title: 'Selected Option',
                      anchor: 'selectedOption'
                    },
                    {
                      title: 'Selected Options',
                      anchor: 'selectedOptions'
                    },
                    {
                      title: 'Select Mode',
                      anchor: 'selectMode'
                    },
                    {
                      title: 'Show Clear Selection Button',
                      anchor: 'showClearSelectionButton'
                    },
                    {
                      title: 'Show Selected Option Remove Button',
                      anchor: 'showSelectedOptionRemoveButton'
                    },
                    {
                      title: 'Multi Select Option Max Width',
                      anchor: 'multiSelectOptionMaxWidth'
                    },
                    {
                      title: 'Wrap Display Select Limit',
                      anchor: 'wrapDisplaySelectLimit'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/functionality/option/filtering',
              title: 'Option Filtering',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Filter Debounce',
                      anchor: 'filterDebounce'
                    },
                    {
                      title: 'Filter Debounce Time',
                      anchor: 'filterDebounceTime'
                    },
                    {
                      title: 'Filter Text',
                      anchor: 'filterText'
                    }
                  ]
                },
                {
                  title: 'Server-side Option Filtering',
                  anchor: 'serverSideFiltering'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/functionality/option/grouping',
              title: 'Option Grouping',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/functionality/lazy-loading',
              title: 'Infinite Scroll',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage',
                  subNavigation: [
                    {
                      title: 'Limit',
                      anchor: 'limit'
                    },
                    {
                      title: 'Load View Distance',
                      anchor: 'loadViewDistance'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Templating',
          menuItems: [
            {
              routePath: '/feature/dropdown/templating/option-template',
              title: 'Option Template',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/templating/option-group-header-template',
              title: 'Option Group Header Template',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/templating/data-loading-template',
              title: 'Data Loading Template',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Styling',
          menuItems: [
            {
              routePath: '/feature/dropdown/styling/menu-position',
              title: 'Menu Position',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/styling/menu-width-height',
              title: 'Menu Width & Height',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Menu Height',
                      anchor: 'menuHeight'
                    },
                    {
                      title: 'Menu Width',
                      anchor: 'menuWidth'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/styling/themes',
              title: 'Themes',
              navigation: [
                {
                  title: 'Predefined Themes',
                  anchor: 'predefinedThemes',
                  subNavigation: [
                    {
                      title: 'Base Theme',
                      anchor: 'baseTheme'
                    },
                    {
                      title: 'Dark Theme',
                      anchor: 'darkTheme'
                    },
                    {
                      title: 'Flat Theme',
                      anchor: 'flatTheme'
                    },
                    {
                      title: 'Ornamentum Theme',
                      anchor: 'ornamentumTheme'
                    },
                    {
                      title: 'Aegean Theme',
                      anchor: 'aegeanTheme'
                    }
                  ]
                }
              ]
            },
            {
              routePath: '/feature/dropdown/styling/custom-theming',
              title: 'Custom Theming'
            }
          ]
        },
        {
          name: 'Advanced',
          menuItems: [
            {
              routePath: '/feature/dropdown/advanced/load-data-on-init',
              title: 'Load Data On Init',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/advanced/events',
              title: 'Events',
              navigation: [
                {
                  title: 'Events Hierarchy',
                  anchor: 'eventsHierarchy'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Events',
                  anchor: 'usefulEvents',
                  subNavigation: [
                    {
                      title: 'Init',
                      anchor: 'init'
                    },
                    {
                      title: 'Data Bound',
                      anchor: 'dataBound'
                    },
                    {
                      title: 'Select Change',
                      anchor: 'selectChange'
                    },
                    {
                      title: 'Trigger Select Change On Init',
                      anchor: 'triggerSelectChangeOnInit'
                    },
                    {
                      title: 'Trigger Select Change on First Option Select',
                      anchor: 'triggerSelectChangeOnFirstOptionSelect'
                    },
                    {
                      title: 'Trigger Select Change On Model Update',
                      anchor: 'triggerSelectChangeOnModelUpdate'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/advanced/translations',
              title: 'Translations',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'No Data Message',
                      anchor: 'noDataMessage'
                    },
                    {
                      title: 'Filter Placeholder',
                      anchor: 'filterPlaceholder'
                    },
                    {
                      title: 'Select Placeholder',
                      anchor: 'selectPlaceholder'
                    },
                    {
                      title: 'Selected Option Wrap Placeholder',
                      anchor: 'selectedOptionWrapPlaceholder'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/advanced/config-overriding',
              title: 'Configuration Overriding',
              navigation: [
                {
                  title: 'Overriding Hierarchy',
                  anchor: 'overridingHierarchy',
                  subNavigation: [
                    {
                      title: 'Default Configuration',
                      anchor: 'defaultConfiguration'
                    },
                    {
                      title: 'Template Property Binding',
                      anchor: 'templatePropertyBinding'
                    },
                    {
                      title: 'Module Property Binding',
                      anchor: 'modulePropertyBinding'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  public activeMenuItem: MenuItem;

  @ViewChild('pageWrapper', { static: true })
  public pageWrapper: ElementRef;

  constructor(
    private router: Router,
    private scrollService: ScrollService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  public onThemeChange(cssClass: string): void {
    this.themeCssClass = cssClass;
  }

  public onRouteChange(): void {
    this.setActiveMenuItem();
    this.pageWrapper.nativeElement.scrollTop = 0;
  }

  private setActiveMenuItem(): void {
    const pathSegments = this.router.url.split('#');
    for (const menuGroup of this.menuGroups) {
      for (const menuSubGroup of menuGroup.menuSubGroup) {
        const item = menuSubGroup.menuItems.find((menuItem: MenuItem) => {
          return menuItem.routePath === pathSegments[0];
        });

        if (item) {
          this.activeMenuItem = item;
          if (isPlatformBrowser(this.platformId) && this.pageWrapper && pathSegments.length > 1) {
            window.setTimeout(() => {
              this.scrollService.scrollToHash(this.pageWrapper.nativeElement, pathSegments[1]);
            });
          }
          return;
        }
      }
    }
  }
}
