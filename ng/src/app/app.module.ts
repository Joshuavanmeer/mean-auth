import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthenticationModule } from "./components/authentication/authentication.module";
import { AppRoutingModule } from "./app.routing.module";
import { HomeModule } from "./components/home/home.module";

// global services
import { AuthenticationService } from "./components/authentication/authentication.service";
import { HttpService } from "./components/services/http.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HomeModule,
        AuthenticationModule,
        AppRoutingModule
    ],
    providers: [
        AuthenticationService,
        HttpService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
