import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routedComponents, AdminRoutingModule} from './admin-routing.module'


@NgModule({
    imports: [
        AdminRoutingModule,
        CommonModule
    ],
    declarations: [ routedComponents ]
})
export class AdminModule { }