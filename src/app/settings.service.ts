import {Injectable} from '@angular/core';
import './rxjs-extensions.ts';
import {CONFIG} from "./constants";
import {Subject}    from 'rxjs/Subject';
import {Http} from '@angular/http';

@Injectable()
export class SettingsService {

  subject: Subject<Object>;
  settings: Object;

  constructor(private http:Http) {
    this.settings = {};
    this.subject = new Subject<Object>();
    this.subject.next(this.settings);
  }

  getSettings():Object {
    return this.settings;
  }

  getSettingsFromServer():Promise<Object> {
    return this.http.get(CONFIG.SERVER + 'settings/')
      .toPromise()
      .then(response => response.json().data)
      .then(settings => { this.settings = settings; this.subject.next(settings) })
      .catch(CONFIG.errorHandler);

  }

  subscribeFor(): Subject<Object> {
    return this.subject;
  }
}
