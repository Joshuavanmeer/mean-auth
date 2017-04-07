import { Injectable } from '@angular/core';
import { User } from "./models/user.model";
import { HttpService } from "../services/http.service";

@Injectable()
export class AuthenticationService {

    authToken: string;
    user: any;


    register(userDetails: any): void {
        const newUser = new User(
            userDetails.email,
            userDetails.password,
            userDetails.name,
            userDetails.username
        );
        this.httpService.post(['http://localhost:3000/users'], newUser)
            .subscribe(
                res => {
                    console.log(res);
                },
                err => {
                    console.log(err);
                }
            );
    }

    constructor(
        private httpService: HttpService
    ) { }

}
