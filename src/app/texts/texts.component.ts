import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {TextsService} from "./texts-service";
import {Text} from "./text";
import {LoadedService} from "../load-page.service";
import {UserService} from "../users/user-service";
import {User} from "../users/user";
import {Collection} from "../collections/collection";
import {CollectionsService} from "../collections/collections-service";
import {CONFIG} from "../constants";
import {AuthService} from "../auth.service";
import {PageTitleService} from "../page-title.service";
import {CategoryService} from "../categories/category.service";
import {AuthUser} from "../users/auth-user";

@Component({
  selector: 'text-list',
  templateUrl: '../html/texts/texts.component.html',
  styleUrls: ['../css/texts/texts.component.css', "../css/common.css"]
})
export class TextsComponent implements OnInit {

  texts: Text[];
  user: User;
  collection: Collection;

  constructor(private pageTitleService: PageTitleService, private cService: CollectionsService, private auth: AuthService,
            private textsService: TextsService, private userService: UserService, private loadService: LoadedService,
            private router:Router, private route: ActivatedRoute, private catService: CategoryService) {
  }

  createText(): void {
    let path = '/authors/' + this.user.id;
    if (this.collection) {
      path += '/collections/' + this.collection.id;
    }
    path += '/texts/create';
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    this.pageTitleService.pageTitle.clear().setTitle('Произведения');
    this.loadService.endLoad();
    this.route.params.forEach((params: Params) => {
      let userId = +params['id'];
      let cId = +params['cId'];
      let catId = +params['catId'];
      this.loadService.startLoad();
      if (userId) {
        if (cId) {
          this.geCollectionTexts(userId, cId, 0, 0);
        } else {
          this.getUserTexts(userId, 0, 0);
        }
      } else {
        if (catId) {
          this.getCategoryTexts(catId, 0, 0);
        } else {
          this.getTexts(0, 0);
        }
      }
    });
  }

  _setInnerData(texts: Text[]): void {
    this.user = null;
    this.collection = null;
    this.texts = texts;
    this.loadService.endLoad();
  }

  getCategoryTexts(catId: number, start:number, end:number): void {
    this.textsService.getCategoryTexts(catId, start, end).then(texts => {
      this.catService.getCategory(catId).then(cat => {
        this._setInnerData(texts);
        this.pageTitleService.pageTitle.push('Жанры', '').push(cat.category_name, '');
      });
    });
  }

  getTexts(start:number, end:number): void {
    this.textsService.getTexts(start, end).then(texts => {
      this._setInnerData(texts);
    });
  }

  getUserTexts(id:number, start:number, end:number): void {
    this.textsService.getUserTexts(id, start, end).then(texts => {
      this.userService.getUser(id).then(user => {
        this._setInnerData(texts);
        this.user = user;
        this.pageTitleService.pageTitle.push(this.user.nickname, '/authors/' + this.user.id);
      });
    });
  }

  geCollectionTexts(id:number, cid:number, start:number, end:number): void {
    this.textsService.getCollectionTexts(id, cid, start, end).then(texts => {
      this.cService.getCollection(cid).then(c => {
        this._setInnerData(texts);
        this.collection = c;
        this.user = c.user;
        this.pageTitleService.pageTitle.push(this.user.nickname, '/authors/' + this.user.id).push(this.collection.collection_name, '/authors/' + this.user.id + '/collections');
      });
    });
  }

  isAdmin(user: User | AuthUser):boolean {
    return user.type == CONFIG.ROLES.ADMIN;
  }

  isAuthor():boolean {
    return this.user && this.user.type > CONFIG.ROLES.VISITOR && this.auth.isAuthor(this.user);
  }
}
