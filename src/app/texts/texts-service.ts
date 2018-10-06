import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import '../rxjs-extensions.ts';
import {CONFIG} from "../constants";
import {Text} from "./text";

@Injectable()
export class TextsService {

  constructor(private http: Http) { }

  getUserText(userId: number, textId: number): Promise<Text>  {
    return this.http.get(CONFIG.SERVER + 'authors/' + userId + "/texts/" + textId)
      .toPromise()
      .then(response => response.json().data as Text)
      .catch(CONFIG.errorHandler);
  }

  getTexts(start:number, end:number): Promise<Text[]>  {
    return this._getTexts('texts/');
  }

  getUserTexts(userId:number, start:number, end:number): Promise<Text[]> {
    return this._getTexts('authors/' + userId + '/texts');
  }

  getCategoryTexts(catId:number, start:number, end:number): Promise<Text[]> {
    return this._getTexts('texts/categories/' + catId);
  }

  getCollectionTexts(userId:number, cid:number, start:number, end:number): Promise<Text[]> {
    return this._getTexts('authors/' + userId + '/collections/' + cid + '/texts');
  }

  _getTexts(uri:string): Promise<Text[]> {
    return this.http.get(CONFIG.SERVER + uri)
      .toPromise()
      .then(response => response.json().data as Text[])
      .catch(CONFIG.errorHandler);
  }

}
