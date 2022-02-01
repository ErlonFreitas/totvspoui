import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@po-ui/ng-templates";
export class TSmartGridComponent {
    constructor() {
        this.serviceApi = 'http://localhost:8051/api/rh/v1/persons/';
        this.cityOptions = [
            { value: 'São Paulo', label: 'São Paulo' },
            { value: 'Joinville', label: 'Joinville' },
            { value: 'São Bento', label: 'São Bento' },
            { value: 'Araquari', label: 'Araquari' },
            { value: 'Campinas', label: 'Campinas' },
            { value: 'Osasco', label: 'Osasco' }
        ];
        this.fields = [
            { property: 'id', key: true, visible: false, filter: false },
            { property: 'name', label: 'Nome', filter: true, visible: true },
            { property: 'student', label: 'Estudante', filter: true, gridColumns: 6 },
            { property: 'teacher', label: 'Professor', filter: true, gridColumns: 6, duplicate: true, sortable: false },
            {
                property: 'birth',
                label: 'Aniversario',
                type: 'date',
                gridColumns: 3,
                visible: true,
                allowColumnsManager: true
            },
            {
                property: 'email',
                label: 'Email',
                filter: true,
                duplicate: true,
                options: this.cityOptions,
                gridColumns: 12
            }
        ];
        this.breadcrumb = {
            items: [{ label: 'Usuários' }]
        };
    }
    ngOnInit() {
    }
}
TSmartGridComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: TSmartGridComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TSmartGridComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: TSmartGridComponent, selector: "t-smart-grid", ngImport: i0, template: "<po-page-dynamic-table\r\n  [p-breadcrumb]=\"breadcrumb\"\r\n  [p-fields]=\"fields\"\r\n  [p-service-api]=\"serviceApi\"\r\n>\r\n</po-page-dynamic-table>\r\n", components: [{ type: i1.PoPageDynamicTableComponent, selector: "po-page-dynamic-table", inputs: ["p-load", "p-keep-filters", "p-actions-right", "p-concat-filters", "p-actions", "p-page-custom-actions", "p-table-custom-actions", "p-quick-search-width"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: TSmartGridComponent, decorators: [{
            type: Component,
            args: [{ selector: 't-smart-grid', styles: [], template: "<po-page-dynamic-table\r\n  [p-breadcrumb]=\"breadcrumb\"\r\n  [p-fields]=\"fields\"\r\n  [p-service-api]=\"serviceApi\"\r\n>\r\n</po-page-dynamic-table>\r\n" }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidC1zbWFydC1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3Qtc21hcnQtZ3JpZC9zcmMvbGliL3Qtc21hcnQtZ3JpZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS90LXNtYXJ0LWdyaWQvc3JjL2xpYi90LXNtYXJ0LWdyaWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFtQixTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQVNuRSxNQUFNLE9BQU8sbUJBQW1CO0lBdUM5QjtRQXRDUyxlQUFVLEdBQUcsMENBQTBDLENBQUM7UUFFeEQsZ0JBQVcsR0FBa0I7WUFDcEMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7WUFDMUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7WUFDMUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7WUFDMUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7WUFDeEMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7WUFDeEMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7U0FDckMsQ0FBQztRQUdPLFdBQU0sR0FBZTtZQUM1QixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDNUQsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ2hFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRTtZQUN6RSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO1lBQzNHO2dCQUNFLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixLQUFLLEVBQUUsYUFBYTtnQkFDcEIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osV0FBVyxFQUFFLENBQUM7Z0JBQ2QsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsbUJBQW1CLEVBQUUsSUFBSTthQUMxQjtZQUNEO2dCQUNFLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixLQUFLLEVBQUUsT0FBTztnQkFDZCxNQUFNLEVBQUUsSUFBSTtnQkFDWixTQUFTLEVBQUUsSUFBSTtnQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQ3pCLFdBQVcsRUFBRSxFQUFFO2FBQUU7U0FDcEIsQ0FBQztRQUVPLGVBQVUsR0FBaUI7WUFDbEMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUM7U0FDL0IsQ0FBQztJQUVjLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7O2dIQTFDVSxtQkFBbUI7b0dBQW5CLG1CQUFtQixvRENUaEMsK0pBTUE7MkZER2EsbUJBQW1CO2tCQU4vQixTQUFTOytCQUNFLGNBQWMsVUFFaEIsRUFDUCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5wdXQsIERpcmVjdGl2ZSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvQnJlYWRjcnVtYiB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndC1zbWFydC1ncmlkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Qtc21hcnQtZ3JpZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRTbWFydEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICByZWFkb25seSBzZXJ2aWNlQXBpID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA1MS9hcGkvcmgvdjEvcGVyc29ucy8nO1xuXG4gIHJlYWRvbmx5IGNpdHlPcHRpb25zOiBBcnJheTxvYmplY3Q+ID0gW1xuICAgIHsgdmFsdWU6ICdTw6NvIFBhdWxvJywgbGFiZWw6ICdTw6NvIFBhdWxvJyB9LFxuICAgIHsgdmFsdWU6ICdKb2ludmlsbGUnLCBsYWJlbDogJ0pvaW52aWxsZScgfSxcbiAgICB7IHZhbHVlOiAnU8OjbyBCZW50bycsIGxhYmVsOiAnU8OjbyBCZW50bycgfSxcbiAgICB7IHZhbHVlOiAnQXJhcXVhcmknLCBsYWJlbDogJ0FyYXF1YXJpJyB9LFxuICAgIHsgdmFsdWU6ICdDYW1waW5hcycsIGxhYmVsOiAnQ2FtcGluYXMnIH0sXG4gICAgeyB2YWx1ZTogJ09zYXNjbycsIGxhYmVsOiAnT3Nhc2NvJyB9XG4gIF07XG5cblxuICByZWFkb25seSBmaWVsZHM6IEFycmF5PGFueT4gPSBbXG4gICAgeyBwcm9wZXJ0eTogJ2lkJywga2V5OiB0cnVlLCB2aXNpYmxlOiBmYWxzZSwgZmlsdGVyOiBmYWxzZSB9LFxuICAgIHsgcHJvcGVydHk6ICduYW1lJywgbGFiZWw6ICdOb21lJywgZmlsdGVyOiB0cnVlLCB2aXNpYmxlOiB0cnVlIH0sICAgIFxuICAgIHsgcHJvcGVydHk6ICdzdHVkZW50JywgbGFiZWw6ICdFc3R1ZGFudGUnLCBmaWx0ZXI6IHRydWUsIGdyaWRDb2x1bW5zOiA2IH0sXG4gICAgeyBwcm9wZXJ0eTogJ3RlYWNoZXInLCBsYWJlbDogJ1Byb2Zlc3NvcicsIGZpbHRlcjogdHJ1ZSwgZ3JpZENvbHVtbnM6IDYsIGR1cGxpY2F0ZTogdHJ1ZSwgc29ydGFibGU6IGZhbHNlIH0sXG4gICAge1xuICAgICAgcHJvcGVydHk6ICdiaXJ0aCcsXG4gICAgICBsYWJlbDogJ0FuaXZlcnNhcmlvJyxcbiAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgIGdyaWRDb2x1bW5zOiAzLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIGFsbG93Q29sdW1uc01hbmFnZXI6IHRydWVcbiAgICB9LFxuICAgIHsgXG4gICAgICBwcm9wZXJ0eTogJ2VtYWlsJywgXG4gICAgICBsYWJlbDogJ0VtYWlsJywgXG4gICAgICBmaWx0ZXI6IHRydWUsXG4gICAgICBkdXBsaWNhdGU6IHRydWUsIFxuICAgICAgb3B0aW9uczogdGhpcy5jaXR5T3B0aW9ucyxcbiAgICAgIGdyaWRDb2x1bW5zOiAxMiB9XG4gIF07ICBcblxuICByZWFkb25seSBicmVhZGNydW1iOiBQb0JyZWFkY3J1bWIgPSB7XG4gICAgaXRlbXM6IFt7IGxhYmVsOiAnVXN1w6FyaW9zJyB9XVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPHBvLXBhZ2UtZHluYW1pYy10YWJsZVxyXG4gIFtwLWJyZWFkY3J1bWJdPVwiYnJlYWRjcnVtYlwiXHJcbiAgW3AtZmllbGRzXT1cImZpZWxkc1wiXHJcbiAgW3Atc2VydmljZS1hcGldPVwic2VydmljZUFwaVwiXHJcbj5cclxuPC9wby1wYWdlLWR5bmFtaWMtdGFibGU+XHJcbiJdfQ==