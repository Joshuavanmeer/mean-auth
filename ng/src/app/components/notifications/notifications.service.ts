import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class NotificationsService {

    flashMessageDispenser: Subject<any> = new Subject();

    // creates a flash message according to a certain config
    showFlashMessage(config) {
        this.flashMessageDispenser.next(config);
    }

    constructor() { }

}
