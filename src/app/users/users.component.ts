import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import {UserService} from "./user-service";
import {User} from "./user";
import {AuthService} from "../auth.service";
import {LoadedService} from "../load-page.service";
import {CONFIG} from "../constants";
import {PageTitleService} from "../page-title.service";
import {AuthUser} from "./auth-user";

@Component({
  selector: 'user-list',
  templateUrl: '../html/users/users.component.html',
  styleUrls: ['../css/users/users.component.css', "../css/common.css"]
})
export class UsersComponent implements OnInit {
  users:User[];

  constructor(private pageTitle: PageTitleService, private userService:UserService, private auth:AuthService,
              private router: Router, private loadService: LoadedService) {}

  ngOnInit():void {
    this.pageTitle.pageTitle.clear().setTitle('Авторы');
    this.getUsers(0, 20);
  }

  getUsers(start:number, end:number) {
    this.userService.getUsers().then(users =>
      {
        this.users = users;
        this.loadService.endLoad();
      }
    );
  }

  isAdmin(user: User | AuthUser):boolean {
    return user.type == CONFIG.ROLES.ADMIN;
  }
}
