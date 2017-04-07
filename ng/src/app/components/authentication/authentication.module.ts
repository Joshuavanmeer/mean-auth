import {NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AuthenticationComponent } from "./authentication.component";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationRoutingModule } from "./authentication.routing.module";

@NgModule({
    declarations: [
        AuthenticationComponent,
        LoginComponent,
        LogoutComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthenticationRoutingModule
    ],
    providers: []
})

export class AuthenticationModule { }
