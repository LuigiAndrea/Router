import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';

import { NameAppService, NameConfig, NameComponent } from './name-user-service';
import { AuthGuard,CanDeactivateGuard } from './guard-services';
import {UrlNotFound,TeamService,DialogService,AuthService,ConfirmDialogComponent, LoginService} from './'

//modules
import { ContactsModule } from '../contacts/contacts.module';
import {LoginModule} from '../login/login.module';

@NgModule({
  imports: [ContactsModule,LoginModule,MaterialModule.forRoot()],
  declarations: [NameComponent, UrlNotFound,ConfirmDialogComponent],
  exports: [NameComponent],
  providers: [
    NameAppService, TeamService, DialogService,
    AuthService, AuthGuard, CanDeactivateGuard,
    LoginService
  ],
  entryComponents:[ConfirmDialogComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: NameConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: NameConfig, useValue: config }
      ]
    };
  }
}