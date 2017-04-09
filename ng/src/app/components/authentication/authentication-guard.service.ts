import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthenticationGuardService implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(): boolean {
        if (this.authenticationService.isLoggedIn()) { return true; }
        this.router.navigate(['auth/login']);
        return false;
    }

}
