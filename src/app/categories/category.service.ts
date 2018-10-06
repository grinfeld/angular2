import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import '../rxjs-extensions';


import {CONFIG} from "../constants";
import {Category} from "./category";

@Injectable()
export class CategoryService {
  categories:Category[];

  constructor(private http: Http) { }

  getCategories():Category[] {
    return this.categories && this.categories.length ? this.categories : [];
  }

  fetchCategories(): Promise<Category[]> {
    return this.http.get(CONFIG.SERVER + 'categories/')
      .toPromise()
      .then(response => response.json().data as Category[])
      .catch(CONFIG.errorHandler);
  }

  getCategory(catId: number): Promise<Category> {
    return this.http.get(CONFIG.SERVER + 'categories/' + catId)
      .toPromise()
      .then(response => response.json().data as Category)
      .catch(CONFIG.errorHandler);
  }
}
