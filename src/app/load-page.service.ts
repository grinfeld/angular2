import {Injectable} from '@angular/core';
import {Subject}    from 'rxjs/Subject';

@Injectable()
export class LoadedService {
  subject:Subject<boolean>;
  loaded:boolean;

  constructor() {
    this.subject = new Subject<boolean>();
    this.startLoad();
  }

  startLoad() {
    this.loaded = false;
    this.subject.next(this.loaded);
  }

  endLoad() {
    this.loaded = true;
    this.subject.next(this.loaded);
  }

  isLoaded():boolean {
    return this.loaded;
  }

  subscribeFor(): Subject<boolean> {
    return this.subject;
  }
}
