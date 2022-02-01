import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@po-ui/ng-templates';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoModule } from '@po-ui/ng-components';

class TSmartGridComponent {
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

class TSmartGridModule {
}
TSmartGridModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: TSmartGridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TSmartGridModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: TSmartGridModule, declarations: [TSmartGridComponent], imports: [PoModule,
        PoTemplatesModule], exports: [TSmartGridComponent] });
TSmartGridModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: TSmartGridModule, imports: [[
            PoModule,
            PoTemplatesModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: TSmartGridModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TSmartGridComponent
                    ],
                    imports: [
                        PoModule,
                        PoTemplatesModule
                    ],
                    exports: [
                        TSmartGridComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of t-smart-grid
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TSmartGridComponent, TSmartGridModule };
//# sourceMappingURL=t-smart-grid.mjs.map
