import { Injectable, Optional } from '@angular/core';

let nextId = 1;

export class NameConfig {
  appName:string;
}

@Injectable()
export class NameAppService {
  id = nextId++;
  private _appName = 'Default Name';

  constructor(@Optional() config: NameConfig) {
    if (config) { this._appName = config.appName; }
  }

  get appName() {
    // Demo: add a suffix if this service has been created more than once
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._appName + suffix;
  }
}
