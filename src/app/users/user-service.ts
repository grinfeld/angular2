import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import '../rxjs-extensions.ts';
import {CONFIG} from "../constants";
import {User} from "./user";

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers(): Promise<User[]>  {
    return this.http.get(CONFIG.SERVER + 'users/')
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(CONFIG.errorHandler);
  }

  getUser(id): Promise<User>  {
    return this.http.get(CONFIG.SERVER + 'users/' + id)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(CONFIG.errorHandler);
  }

  updateText(user:User): void {
    this.http.post(CONFIG.SERVER + 'users/' + user.id, {})
      .toPromise()
      //.then(response => response.json().data as User)
      .catch(CONFIG.errorHandler);
  }
}
