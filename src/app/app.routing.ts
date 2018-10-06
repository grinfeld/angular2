import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {AuthGuard} from "./auth-guard.service";
import {AuthService} from "./auth.service";
import {LoginComponent} from "./login.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user.component";
import {LogoutComponent} from "./logout.component";
import {TextsComponent} from "./texts/texts.component";
import {ProfileComponent} from "./profile.component";
import {UserTextComponent} from "./users/user-text.component";
import {CollectionsComponent} from "./collections/collections.component";


const appRoutes:Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'authors',
    children: [
      {
        path: '',
        component: UsersComponent
      },
      {
        path: ':id',
        component: UserComponent,
      },
      {
        path: ':id/texts',
        children: [
          {
            path: '',
            component: TextsComponent
          },
          {
            path: ':textId',
            component: UserTextComponent
          },
          {
            path: 'create',
            component: UserTextComponent,
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: ':id/collections',
        children: [
          {
            path: '',
            component: CollectionsComponent
          },
          {
            path: ':cId',
            children: [
              {
                path: '',
                component: TextsComponent
              },
              {
                path: 'texts/create',
                component: UserTextComponent
              }
            ]
          },
          {
            path: 'create',
            component: HomeComponent,
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'create',
        component: UserComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'texts',
    children: [
      {
        path: '',
        component: TextsComponent
      },
      {
        path: 'categories/:catId',
        component: TextsComponent
      }
    ]
  },
  {
    path: 'collections',
    children: [
      {
        path: '',
        component: CollectionsComponent
      },
      {
        path: 'create',
        component: HomeComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

export const authProviders = [
  AuthGuard,
  AuthService
];

export const appRoutingProviders:any[] = [
  authProviders
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
