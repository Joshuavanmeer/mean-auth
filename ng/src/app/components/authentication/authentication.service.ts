import { Injectable } from '@angular/core';
import { User } from "./models/user.model";
import { HttpService } from "../services/http.service";

@Injectable()
export class AuthenticationService {

    authToken: string;
    user: any;


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
                    console.log(res);
                },
                err => {
                    console.log(err);
                }
            );
    }


    login(userCredentials: any) {
        this.httpService.post(['http://localhost:3000/auth/login'], userCredentials)
            .subscribe(res => {
                localStorage.setItem('jwt', res.token);
                localStorage.setItem('user', JSON.stringify(res.user));
                localStorage.setItem('userId', res.user.userId);
                this.user = new User(
                    userCredentials.email,
                    null,
                    res.user.name,
                    res.user.username
                );
            },
            err => {
                console.log(err);
            });
    }



    constructor(
        private httpService: HttpService
    ) { }

}
