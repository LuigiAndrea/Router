import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule, APP_ROUTES_MODULE_PROVIDER } from './app-routing.module';

@NgModule({
    imports: [ // module dependencies
        BrowserModule,
        CoreModule.forRoot({ appName: 'Super Contact' }),
        AppRoutingModule

    ],
    declarations: [ // components and directives
        AppComponent
    ],
    bootstrap: [AppComponent], // root component
    providers: [ // services
    ]
})

export class AppModule {

}
