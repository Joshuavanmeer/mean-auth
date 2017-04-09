import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard.routing.module";
import { AccountComponent } from './account/account.component';


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        AccountComponent
    ],
    providers: []
})

export class DashboardModule {}
