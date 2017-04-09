import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-flash-messages',
  templateUrl: 'flash-messages.component.html',
  styleUrls: ['flash-messages.component.css']
})
export class FlashMessagesComponent implements OnInit {

    @Input() config: any;


    constructor() { }

    // subscrive to notifications service

    ngOnInit() {
    }

}
