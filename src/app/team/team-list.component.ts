import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { DialogService, TeamService } from '../core';

@Component({
  selector: 'team-list-component',
  template: `
    <h1>I am {{teamComponentName}} Component</h1>
    <router-outlet></router-outlet>
    <router-outlet name='aux'></router-outlet>
     <div>
        <label>Name Team: </label>
        <input [(ngModel)]="beforeEdit" placeholder="team name"/>       
        <button (click)="changeName()">Change Name</button>
        <button (click)="cancel()">Cancel</button>
    </div> 
  `
})
export class TeamListComponent implements OnInit {
  teamComponentName: string;
  beforeEdit: string;

  constructor(private router: Router, private dialogService: DialogService, private teamService: TeamService) { }

  ngOnInit(): any {
    var nam = this.teamService.retriveName();
    this.teamComponentName = !nam ? 'Team' : nam;
  }

  changeName(): void {
    this.teamComponentName = this.beforeEdit;
    this.teamService.saveTeam(this.teamComponentName);
  }
  cancel(): void {
    this.router.navigate(['contacts']);
  }

  canDeactivate(): Observable<boolean> | boolean {

    if (!this.beforeEdit || this.beforeEdit === this.teamComponentName) {
      return true;
    }

    return this.dialogService.confirm('Discard changes?');
  }
}