import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MenuService} from "./menu-service";
import {Menu} from "./menu";
import {AuthService} from "./auth.service";

@Component({
  selector: 'menu-list',
  templateUrl: './html/menu.component.html',
  styleUrls: ['./css/menu.component.css', "./css/common.css"]
})
export class MenuComponent implements OnInit {
  menus: Menu[];
  menuOpened: boolean = false;

  constructor(private menuService: MenuService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.subscribeFor().subscribe(user =>
      this.menuService.getMenus().then(menus => this.menus = menus)
    );
  }
  openMenu() {
    this.menuOpened = true;
  }
  closeMenu() {
    this.menuOpened = false;
  }
  isMenuOpened():boolean {
    return this.menuOpened;
  }
  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }
  gotoMenu(menu) {
    this.router.navigate([menu.path]);
    this.closeMenu();
  }
}
