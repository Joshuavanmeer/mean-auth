import { Injectable } from '@angular/core';
import { User } from "./models/user.model";
import { HttpService } from "../services/http.service";
import { NotificationService } from "../notifications/notification.service";
import { Router } from "@angular/router";
import { FlashMessage } from "../notifications/models/flashmessage.model";
import { BehaviorSubject } from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService {

    authToken: string;
    user: any;

    // streams
    private isLoggedInSource: BehaviorSubject<boolean> = new BehaviorSubject(false);
    // end points
    isLoggedIn$ = this.isLoggedInSource.asObservable();


    constructor(
        private router: Router,
        private httpService: HttpService,
        private notificationService: NotificationService
    ) { }


    // check is user has a jsonwebtoken
    // stored in localstorage
    checkAuthenticationState() {
        if (localStorage.getItem('jwt')) {
            this.isLoggedInSource.next(true);
        }
    }


    // sets authorization state
    updateAuthenticationState(state: boolean) {
        this.isLoggedInSource.next(state);
    }


    register(userDetails: any) {
        const newUser = {
            name: userDetails.name,
            username: userDetails.username,
            email: userDetails.email,
            password: userDetails.password
        };
        this.httpService.post(['http://localhost:3000/auth/register'], newUser)
            .subscribe(
                res => {
                    this.notificationService.showFlashMessage(
                        new FlashMessage(
                            res.type,
                            res.message,
                            5000
                        )
                    );
                    this.router.navigateByUrl('/auth/login');
                },
                err => {
                    this.notificationService.showFlashMessage(
                        new FlashMessage(
                            err.type,
                            err.message,
                            5000
                        )
                    )
                }
            );
    }


    login(userCredentials: any) {
        this.httpService.post(['http://localhost:3000/auth/login'], userCredentials)
            .subscribe(
                res => {
                    localStorage.setItem('jwt', res.token);
                    localStorage.setItem('user', JSON.stringify(res.user));
                    localStorage.setItem('userId', res.user.userId);
                    this.user = new User(
                        userCredentials.email,
                        null,
                        res.user.name,
                        res.user.username
                    );
                    this.authToken = res.token;
                    this.notificationService.showFlashMessage(
                        new FlashMessage(
                            res.type,
                            res.message,
                            5000
                        )
                    );
                    this.updateAuthenticationState(true);
                    this.router.navigate(['/dashboard']);
            },
                err => {
                    this.notificationService.showFlashMessage(
                        new FlashMessage(
                            err.type,
                            err.message,
                            5000
                        )
                    );
            });
    }


    logout() {
        this.isLoggedInSource.next(false);
        localStorage.clear();
        this.user = null;
        this.notificationService.showFlashMessage(
            new FlashMessage(
                'success',
                'You have been logged out',
                5000
            )
        );
        this.router.navigate(['/']);
    }


    isLoggedIn(): boolean {
        if (localStorage.getItem('jwt')) { return true; }
        return false;
    }


}
