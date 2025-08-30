import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', 
    loadComponent: () => import('./home/home').then(m => m.HomeComponent)
  },
  {
    path: 'services', 
    loadComponent: () => import('./services/services').then(m => m.ServicesComponent)
  },
  {
    path: 'products', 
    loadComponent: () => import('./products/products').then(m => m.ProductsComponent)
  },
  {
    path: 'about', 
    loadComponent: () => import('./about/about').then(m => m.AboutComponent)
  },
  {
    path: 'contact', 
    loadComponent: () => import('./contact/contact').then(m => m.ContactComponent)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-routing').then(m => m.ADMIN_ROUTES)
  }
];