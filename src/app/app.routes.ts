import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'signin',
    loadComponent: () => import('./signin/signin.page').then( m => m.SigninPage)
  },
  {
    path: 'myspace',
    loadComponent: () => import('./myspace/myspace.page').then( m => m.MyspacePage)
  },
];
