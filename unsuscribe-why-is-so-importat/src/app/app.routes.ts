import { Routes } from '@angular/router';
import { UsersComponent } from './users-component/users-component';
import { App } from './app';
import { Home } from '../../../implement-router-outlet-link/src/app/home/home';
import { HomeComponent } from './home-component/home-component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:"users",
    component: UsersComponent
  }
];
