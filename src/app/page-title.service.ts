import {Injectable} from '@angular/core';
import {WithTitle} from "./with-title";

@Injectable()
export class PageTitleService {
  pageTitle: WithTitle;


  constructor() {
      this.pageTitle = new WithTitle();
  }
}
