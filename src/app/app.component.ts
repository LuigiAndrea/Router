import { Component} from '@angular/core';

import { AuthService } from './core';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html'
})
export class AppComponent  {
  user: string = 'LuigiAndrea';
}