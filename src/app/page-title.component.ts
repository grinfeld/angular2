import { Component, OnInit } from '@angular/core';
import {PageTitleService} from "./page-title.service";

@Component({
  selector: 'page-title',
  templateUrl: './html/page-title.component.html',
  styleUrls: ['./css/page-title.component.css', "./css/common.css"]
})
export class PageTitleComponent implements OnInit{
  constructor(private service: PageTitleService) {
  }

  ngOnInit(): void {}
}
