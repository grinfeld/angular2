import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {UserService} from "./user-service";
import {User} from "./user";
import {AuthService} from "../auth.service";
import {CONFIG} from "../constants";
import {AuthUserWrapper} from "./auth-user-wrapper.component";
import {LoadedService} from "../load-page.service";
import {PageTitleService} from "../page-title.service";

@Component({
  selector: 'single-user',
  templateUrl: '../html/users/user.component.html',
  styleUrls: ['../css/users/user.component.css', "../css/common.css"]
})
export class UserComponent implements OnInit {
  data: AuthUserWrapper = new AuthUserWrapper(CONFIG.createEmptyUser(), this.auth);

  constructor(private pageTitle: PageTitleService, private auth: AuthService, private userService: UserService, private route: ActivatedRoute, private loadService: LoadedService) {}

  ngOnInit(): void {
    this.pageTitle.pageTitle.clear().setTitle('');
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getSingleUser(id);
    });
  }

  resetAuthorForm(): void {
    if (this.data && this.data.user.id > 0) {
      this.getSingleUser(this.data.user.id);
    } else {
      this.data = new AuthUserWrapper(CONFIG.createEmptyUser(), this.auth);
    }
  }

  getSingleUser(id: number): Promise<User>  {
    if (id) {
      return this.userService.getUser(id)
        .then(user => {
          if (user) {
            this.pageTitle.pageTitle.push('Авторы', '/authors').setTitle(user.nickname);
          } else {
            user = CONFIG.createEmptyUser();
          }
          this.data = new AuthUserWrapper(user, this.auth);
          this.loadService.endLoad();
        });
    } else {
      this.pageTitle.pageTitle.setTitle("Создать Автора");
      this.loadService.endLoad();
      return Promise.resolve(CONFIG.createEmptyUser());
    }
  }
}
