import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {LoadedService} from "../load-page.service";
import {UserService} from "../users/user-service";
import {User} from "../users/user";
import {Collection} from "./collection";
import {CollectionsService} from "./collections-service";
import {PageTitleService} from "../page-title.service";

@Component({
  selector: 'text-list',
  templateUrl: '../html/collections/collections.component.html',
  styleUrls: ['../css/collections/collections.component.css', "../css/common.css"]
})
export class CollectionsComponent implements OnInit {
  collections: Collection[];
  user: User;

  constructor(private pageTitleService: PageTitleService, private colService: CollectionsService,
            private userService: UserService, private loadService: LoadedService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.pageTitleService.pageTitle.clear().setTitle('Подборки');
    this.loadService.endLoad();
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.loadService.startLoad();
      if (id) {
        this.getUserCollections(id, 0, 0);
      } else {
        this.getCollections(0, 0);
      }
    });
  }

  getCollections(start:number, end:number) {
    this.colService.getCollections(start, end).then(collections => {
      this.user = null;
      this.collections = collections;
      this.loadService.endLoad();
    });
  }

  getUserCollections(id:number, start:number, end:number) {
    this.colService.getUserCollections(id, start, end).then(collections => {
      this.userService.getUser(id).then(user => {
        this.user = user;
        this.collections = collections;
        this.pageTitleService.pageTitle.push(this.user.nickname, '/authors/' + this.user.id);
        this.loadService.endLoad();
      } );
    });
  }
}
