import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import './rxjs-extensions';

import {Menu} from "./menu";
import {CONFIG} from "./constants";

@Injectable()
export class MenuService {

  constructor(private http: Http) { }

  getMenus(): Promise<Menu[]>  {
    return this.http.get(CONFIG.SERVER + 'menus/')
      .toPromise()
      .then(response => { return response.json().data as Menu[]; })
      .catch(CONFIG.errorHandler);
  }
}
