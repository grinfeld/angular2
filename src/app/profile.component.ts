import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "./auth.service";

@Component({
  selector: 'profile',
  template: ``,
  styleUrls: []
})
export class ProfileComponent implements OnInit {
  constructor(private auth: AuthService,  private router: Router) {
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/authors', this.auth.user.id]);
    }
  }
}
