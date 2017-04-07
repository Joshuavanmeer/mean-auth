import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

    login() {
        this.router.navigate(['login'], { relativeTo: this.route });
    }



    register() {
        this.router.navigate(['register'], { relativeTo: this.route });
    }



  constructor(
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
      console.log(this.route);
  }

}
