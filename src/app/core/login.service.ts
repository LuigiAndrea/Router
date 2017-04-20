import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import {typeAuth} from './';

//Listen to when a user log in or log out from the system
@Injectable()
export class LoginService {

    // Observable string sources
    private authAnnounced = new Subject<typeAuth>();

    // Observable string streams
    authAnnounced$ = this.authAnnounced.asObservable();

    // Service message commands
    announceAuth(type: typeAuth) {
        this.authAnnounced.next(type);
    }
}
