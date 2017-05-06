import { Type, Provider as NGProvider, ModuleWithProviders } from "@angular/core";


export type Import = Type<any> | ModuleWithProviders | any[];
export type Declaration = Type<any> | any[];
export type Provider = NGProvider;
