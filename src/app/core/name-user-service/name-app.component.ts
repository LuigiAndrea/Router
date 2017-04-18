// Exact copy of app/title.component.ts except import UserService from shared
import { Component, Input } from '@angular/core';

import { NameAppService } from './name-app.service';


@Component({
  selector: 'app-name',
  templateUrl: 'app/core/name-user-service/name-app.component.html',
})
export class NameComponent {
  @Input() userName = '';
  name = '';


  constructor(private nameService: NameAppService) {
    this.name = nameService.appName;
  }
}
