import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import './rxjs-extensions.ts';
import {CONFIG} from "./constants";
import {Subject}    from 'rxjs/Subject';

import {User} from "./users/user";
import {AuthUser} from "./users/auth-user";

@Injectable()
export class AuthService {

  subject:Subject<AuthUser>;
  user:AuthUser;

  constructor(private http:Http, private router:Router) {
    this.user = new AuthUser();
    this.subject = new Subject<AuthUser>();
    this.subject.next(this.user);
  }

  redirectUrl:string = '';

  _setLogin(user:AuthUser) {
    this.user = user;
    this.subject.next(user);
  }

  _navigate() {
    if (this.redirectUrl) {
      let u = this.redirectUrl;
      this.redirectUrl = '';
      this.router.navigate([u]);
    }
  }

  checkSession():Promise<AuthUser> {
    return this.http.get(CONFIG.SERVER + 'user/')
      .toPromise()
      .then(response => response.json().data as AuthUser)
      .then(user => {
        this._setLogin(user);
      })
      .catch(function (error:any):Promise<any> {
        this._setLogin(new AuthUser());
        return Promise.reject(error.message || error);
      });
  }

  login(username:string, password:string):Promise<AuthUser> {
    let me = this;
    return this.http.post(CONFIG.SERVER + 'login/', JSON.stringify({
      'username': username,
      'password': password
    }), {headers: CONFIG.jsonHeader})
      .toPromise()
      .then(response => response.json().data as AuthUser)
      .then(user => {
        this._setLogin(user);
        this._navigate();
        return user;
      }).catch(CONFIG.errorHandler);
  }

  isAdmin():boolean {
    return this.user.type === CONFIG.ROLES.ADMIN;
  }

  isAuthor(user:User):boolean {
    return this.user.id == user.id;
  }

  isLoggedIn():boolean {
    return this.user.type > CONFIG.ROLES.VISITOR;
  }

  subscribeFor():Subject<AuthUser> {
    return this.subject;
  }

  logout():void {
    this.http.get(CONFIG.SERVER + 'logout/').toPromise()
      .then(response => {
        this._setLogin(new AuthUser());
      }).catch(CONFIG.errorHandler);
  }
}
