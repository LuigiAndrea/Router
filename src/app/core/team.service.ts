import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {
  name: string;

  saveTeam(n: string):void {
    this.name = n;
  }

  retriveName(): string {
    return this.name;
  }
}