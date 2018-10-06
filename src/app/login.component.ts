import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import { Router } from '@angular/router';
import {LoadedService} from "./load-page.service";

@Component({
  selector: 'login-root',
  templateUrl: './html/login.component.html',
  styleUrls: ['./css/login.component.css', "./css/common.css"]
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router, private loadService: LoadedService) {}

  ngOnInit():void {
    this.loadService.endLoad();
  }

  login(username:string, password:string) {
    if (this.authService.redirectUrl == "")
      this.authService.redirectUrl = "/home";
    this.authService.login(username, password);
  }
}
