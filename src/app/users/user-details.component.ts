import { Component, OnInit, Input } from '@angular/core';
import {AuthUserWrapper} from "./auth-user-wrapper.component";
import {CONFIG} from "../constants";
import {UserDetails} from "./user-details";

@Component({
  selector: 'single-user-details',
  templateUrl: '../html/users/user-details.component.html',
  styleUrls: ["../css/common.css", '../css/users/user.component.css']
})
export class UserDetailsComponent extends OnInit {
  @Input() data: AuthUserWrapper;

  ngOnInit(): void {}

  getDetails(): UserDetails {
    return this.data.user.details;
  }

  isEmailVisible(): boolean {
    return this.data.user.details.email_visibility == CONFIG.VISIBILITY.VISIBLE;
  }

  isFacebookVisible(): boolean {
    return this.data.user.details.facebook_visibility == CONFIG.VISIBILITY.VISIBLE;
  }

  isGoogleVisible(): boolean {
    return this.data.user.details.google_visibility == CONFIG.VISIBILITY.VISIBLE;
  }

  isTwitterVisible(): boolean {
    return this.data.user.details.twitter_visibility == CONFIG.VISIBILITY.VISIBLE;
  }
}
