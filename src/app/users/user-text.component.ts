import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {User} from "./user";
import {LoadedService} from "../load-page.service";
import {TextsService} from "../texts/texts-service";
import {Text} from "../texts/text";
import {AuthUserWrapper} from "./auth-user-wrapper.component";
import {AuthService} from "../auth.service";
import {CategoryService} from "../categories/category.service";
import {CollectionsService} from "../collections/collections-service";
import {Collection} from "../collections/collection";
import {Category} from "../categories/category";
import {UserService} from "./user-service";
import {PageTitleService} from "../page-title.service";
import {CONFIG} from "../constants";

@Component({
  selector: 'user-text',
  templateUrl: '../html/users/user-text.component.html',
  styleUrls: ["../css/common.css", '../css/users/user-text.component.css']
})
export class UserTextComponent implements OnInit {
  text: Text = new Text();
  data: AuthUserWrapper;
  fullscreen: boolean = false;
  allCollections: Collection[];
  allCategories: Category[];

  constructor(private auth: AuthService, private textsService: TextsService,
              private route: ActivatedRoute, private userService: UserService,
              private loadService: LoadedService, private categories: CategoryService,
              private collections: CollectionsService, private pageTitle: PageTitleService) {

  }

  ngOnInit(): void {
    this.data = new AuthUserWrapper(CONFIG.createEmptyUser(), this.auth);
    this.route.params.forEach((params: Params) => {
      let authorId = +params['id'];
      let textId = +params['textId'];
      let cId = +params['cId'];
      if (textId) {
        this.getText(authorId, textId);
      } else {
        this._prepareCreateText(authorId, cId);
      }
    });
  }

  updateText(): void {

  }

  resetTextForm() : void {
    if (this.text && this.text.id > 0) {
      this.getText(this.text.author.id, this.text.id);
    } else {
      this._initTextData();
    }
  }

  getTextDate(): string {
    let v:any = this.text && this.text.publish_date ? (this.text.publish_date) : 0;
    v = v * 1000;
    let d:Date = v > 0 ? new Date(v) : new Date();
    return (d.getDate() < 10 ? '0' : '') + d.getDate() + '/' + (d.getMonth() < 10 ? '0' : '') + d.getMonth() + '/' + d.getFullYear();
  }

  calendarOptions() : any {
    return CONFIG.myDatePickerOptions;
  }

  _initTextData() : void {
    this.text = new Text();
    this.text.collections = [];
  }

  _prepareCreateText(authorId: number, cId: number): void {
    this._initTextData();
    this.data = new AuthUserWrapper(CONFIG.createEmptyUser(), this.auth);
    this.userService.getUser(authorId).then(user => {
        this._initEditData(user, cId);
        this.loadService.endLoad();
      }
    );
    this.pageTitle.pageTitle.setTitle('Создать текст');
  }

  _initEditData(user: User, cId: number): void {
    this.data = new AuthUserWrapper(user, this.auth);
    if (this.data.isEditable()) {
      this.collections.getUserCollections(user.id, 0, 0).then(collections => {
        this.allCollections = collections;
        if (cId > 0 && !(this.text && this.text.id > 0)) {
          let c = this.allCollections.find(c => c.id == cId);
          if (c) {
            this.text.collections.push(c);
          }
        }
      });
      this.categories.fetchCategories().then(categories => this.allCategories = categories);
    }
    this.pageTitle.pageTitle.clear().push(user.nickname, '/authors/' + user.id);
  }

  isCategoryChecked(id: number): boolean {
    return this.text && this.text.collections && this.text.collections.filter(c => c.id == id).length > 0;
  }

  getText(userId: number, textId: number): Promise<User> {
    return this.textsService.getUserText(userId, textId).then(text => {
      this.text = text;
      if (text) {
        this.pageTitle.pageTitle.setTitle(this.text.name);
        this._initEditData(this.text.author, 0);
      }
      this.loadService.endLoad();
    });
  }

  chooseCollection(checked: boolean, id: number): void {
    if (checked) {
      let c = this.allCollections && this.allCollections.length ? this.allCollections.find(c => c.id == id) : null;
      if (c) {
        if (!(this.text.collections && this.text.collections.length)) {
          this.text.collections = [];
        }
        this.text.collections.push(c);
      }
    } else {
      if (this.text && this.text.collections && this.text.collections.length) {
        this.text.collections = this.text.collections.filter(c => c.id != id)
      }
    }
  }

  closeFullScreen() {
    this.fullscreen = false;
  }

  openFullScreen() {
    this.fullscreen = true;
  }
}
