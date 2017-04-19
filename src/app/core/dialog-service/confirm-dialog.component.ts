import { Component } from '@angular/core';

import {MdDialogRef} from '@angular/material'

@Component({
    selector: 'dialog-result',
    templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent {
    message:string;

 constructor(public dialogRef: MdDialogRef<ConfirmDialogComponent>) {}
    
}