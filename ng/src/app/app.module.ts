import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeModule } from "./components/home/home.module";
import { AuthenticationModule } from "./components/authentication/authentication.module";
import { DashboardModule } from "./components/dashboard/dashboard.module";
import { AppRoutingModule } from "./app.routing.module";
// components
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { FlashMessagesComponent } from "./components/notifications/flash-messages/flash-messages.component";
// global services
import { AuthenticationService } from "./components/authentication/authentication.service";
import { HttpService } from "./components/services/http.service";
import { NotificationsService } from "./components/notifications/notifications.service";

@NgModule({
    declarations: [
        AppComponent,
        NotificationsComponent,
        FlashMessagesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AuthenticationModule,
        HttpModule,
        HomeModule,
        DashboardModule,
        AppRoutingModule
    ],
    providers: [
        AuthenticationService,
        NotificationsService,
        HttpService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
