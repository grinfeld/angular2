import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {LoadedService} from "./load-page.service";

@Component({
  selector: 'home-page',
  templateUrl: './html/home.component.html',
  styleUrls: ['./css/home.component.css', "./css/common.css"]
})
export class HomeComponent implements OnInit {

  constructor(private loadService: LoadedService) {
    this.loadService.endLoad();
  }

  ngOnInit(): void {
    this.loadService.endLoad();
  }
}
