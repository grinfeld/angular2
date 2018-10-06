import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {AuthService} from "./auth.service";
import {SettingsService} from "./settings.service";
import {CONFIG} from "./constants";
import './rxjs-extensions';
import {LoadedService} from "./load-page.service";
import {MenuComponent} from "./menu.component";
import {PageTitleService} from "./page-title.service";

@Component({
  selector: 'app-root',
  templateUrl: './html/app.component.html',
  styleUrls: ['./css/app.component.css', "./css/common.css"]
})
export class AppComponent implements OnInit {
  title = '';
  loaded: boolean = true;

  // todo: is for closing menu on any click outside of menu.
  @ViewChild(MenuComponent)
  private menu: MenuComponent;

  anyClick() {
    if (this.menu.isMenuOpened())
      this.menu.closeMenu();
  }

  // todo: is for closing menu on any click outside of menu.

  constructor(private pageTitle: PageTitleService, private auth: AuthService, private settingsService: SettingsService,
              private router: Router, private loadService: LoadedService) {
  }

  ngOnInit(): void {
    this.loadService.subscribeFor().subscribe(loaded => this.loaded = loaded);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.loadService.isLoaded()) {
          this.loadService.startLoad();
        }
        this.pageTitle.pageTitle.clear().setTitle('');
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
    this.settingsService.subscribeFor().subscribe(settings => {
      this.title = settings[CONFIG.settings.SITE_TITLE_NAME] ? settings[CONFIG.settings.SITE_TITLE_NAME] : CONFIG.settings.SITE_TITLE_DEFAULT;
    });
    this.auth.checkSession();
    this.settingsService.getSettingsFromServer();
    this.loaded = true;
  }

}
