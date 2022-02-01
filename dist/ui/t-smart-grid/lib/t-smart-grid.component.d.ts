import { OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';
import * as i0 from "@angular/core";
export declare class TSmartGridComponent implements OnInit {
    readonly serviceApi = "http://localhost:8051/api/rh/v1/persons/";
    readonly cityOptions: Array<object>;
    readonly fields: Array<any>;
    readonly breadcrumb: PoBreadcrumb;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TSmartGridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TSmartGridComponent, "t-smart-grid", never, {}, {}, never, never>;
}
