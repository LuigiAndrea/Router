import { Component, OnInit} from '@angular/core';

import { AuthService, LoginService,typeAuth } from './core';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html'
})
export class AppComponent implements OnInit  {
  user: string = 'LuigiAndrea';
  authentication:string = typeAuth[typeAuth.login]
  
  constructor(private loginService: LoginService){}
   
   ngOnInit(){
    this.loginService.authAnnounced$.subscribe(auth => this.authentication = typeAuth[auth] )
   }
     
}