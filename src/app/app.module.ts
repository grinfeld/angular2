import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';

import { routing, appRoutingProviders }  from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import {MenuComponent} from "./menu.component";

import {MenuService} from "./menu-service";
import {SettingsService} from "./settings.service";

import {UserService} from "./users/user-service";
import {UserComponent} from "./users/user.component";
import {UsersComponent} from "./users/users.component";

import {TextsService} from "./texts/texts-service";
import {TextsComponent} from "./texts/texts.component";
import {AuthService} from "./auth.service";
import {LoginComponent} from "./login.component";
import {LogoutComponent} from "./logout.component";
import {UserDetailsComponent} from "./users/user-details.component";
import {LoadedService} from "./load-page.service";
import {ProfileComponent} from "./profile.component";
import {UserTextComponent} from "./users/user-text.component";
import {CategoryService} from "./categories/category.service";
import {CollectionsComponent} from "./collections/collections.component";
import {CollectionsService} from "./collections/collections-service";
import {PageTitleComponent} from "./page-title.component";
import {PageTitleService} from "./page-title.service";
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    UserComponent,
    UsersComponent,
    TextsComponent,
    LoginComponent,
    LogoutComponent,
    UserDetailsComponent,
    ProfileComponent,
    UserTextComponent,
    CollectionsComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  providers: [UserService, MenuService, TextsService, appRoutingProviders, AuthService, SettingsService, LoadedService, CategoryService, CollectionsService, PageTitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
