import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from "./components/authentication/authentication.component";
import { HomeComponent } from "./components/home/home.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'auth', component: AuthenticationComponent, loadChildren: 'app/components/authentication/authentication.module#AuthenticationModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
