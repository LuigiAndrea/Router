import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { AuthService, LoginService } from '../core';
import { typeAuth } from '../core';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  message: string;
  constructor(public authService: AuthService, public router: Router, public loginService: LoginService) {
  }

  ngOnInit() {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {

        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        this.router.navigate([redirect], navigationExtras);
      }
    },(e)=>console.error(e), ()=>this.loginService.announceAuth(typeAuth.logout));

  }

  logout() {
    this.authService.logout();
    this.setMessage();
    this.loginService.announceAuth(typeAuth.login);
  }
}