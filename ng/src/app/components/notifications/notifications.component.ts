import {Component, OnInit, OnDestroy} from '@angular/core';
import { NotificationsService } from "./notifications.service";

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.component.html',
  styleUrls: ['notifications.component.css']
})
export class NotificationsComponent implements OnInit, OnDestroy {

    private showFlashMessage: boolean = false;
    flashMessageConfig: any;

    private flashMessageSub;

    constructor(
        private notificationsService: NotificationsService
    ) { }




    ngOnInit() {

        this.flashMessageSub = this.notificationsService.flashMessageDispenser
            .subscribe(res => {
                this.showFlashMessage = true;
                setTimeout(() => {
                    this.showFlashMessage = false;
                }, res.duration)
                this.flashMessageConfig = {
                    message: res.message,
                    type: res.type
                }
            });
    }

    ngOnDestroy() {
        this.flashMessageSub.unsubscribe();
    }

}
