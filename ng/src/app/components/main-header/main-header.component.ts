import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../authentication/authentication.service";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

    isLoggedIn: boolean;


    constructor(
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
        // set the state of the logged in user
        this.authenticationService.isLoggedIn$.subscribe(
            (res: boolean) => {
                this.isLoggedIn = res;
            }
        );
    }

}
