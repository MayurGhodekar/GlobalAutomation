import { Route } from '@angular/router';
import { AdminComponent } from './admin';
import { authGuard } from './auth.guard';

export const ADMIN_ROUTES: Route[] = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'login', loadComponent: () => import('./login/login').then(m => m.LoginComponent) },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard').then(m => m.DashboardComponent),
        canActivate: [authGuard],
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
