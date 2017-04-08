import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeModule } from "./components/home/home.module";
import { AuthenticationModule } from "./components/authentication/authentication.module";
import { DashboardModule } from "./components/dashboard/dashboard/dashboard.module";
import { AppRoutingModule } from "./app.routing.module";

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
        DashboardModule,
        AppRoutingModule
    ],
    providers: [
        AuthenticationService,
        HttpService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
