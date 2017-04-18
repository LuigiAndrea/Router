import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { LoginRoutingModule, routedComponents }   from './login-routing.module';

@NgModule({
    imports: [LoginRoutingModule,CommonModule],
    exports: [],
    declarations: [routedComponents],
    providers: [],
})
export class LoginModule { }