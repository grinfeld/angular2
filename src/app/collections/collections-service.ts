import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import '../rxjs-extensions.ts';
import {CONFIG} from "../constants";
import {Collection} from "./collection";

@Injectable()
export class CollectionsService {

  constructor(private http: Http) { }

  _getCollections(uri: string, start:number, end:number): Promise<Collection[]> {
    return this.http.get(CONFIG.SERVER + uri)
      .toPromise()
      .then(response => response.json().data as Collection[])
      .catch(CONFIG.errorHandler);
  }

  getCollections(start:number, end:number): Promise<Collection[]>  {
    return this._getCollections('collections/', start, end);
  }

  getUserCollections(id:number, start:number, end:number): Promise<Collection[]> {
    return this._getCollections('authors/' + id + "/collections", start, end);
  }

  getCollection(id:number): Promise<Collection> {
    return this.http.get(CONFIG.SERVER + 'collections/' + id)
      .toPromise()
      .then(response => response.json().data as Collection)
      .catch(CONFIG.errorHandler);
  }
}
