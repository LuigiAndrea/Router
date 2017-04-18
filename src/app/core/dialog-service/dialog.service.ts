import { Injectable } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';

import { ConfirmDialogComponent } from '../../core';

@Injectable()
export class DialogService {
    /*
     * Returns Obseravable resolving to `true`=confirm or `false`=cancel
     */
    constructor(public dialog: MdDialog) { }

    confirm(message?: string) {
        let dialogRef = this.dialog.open(ConfirmDialogComponent,
            {
                width: '250',
                height: '200',
                disableClose:true
            });

        dialogRef.componentInstance.message = message || 'Is it OK?';
        return dialogRef.afterClosed();
    };
}

