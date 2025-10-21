import { Routes } from '@angular/router';

export const APP_ROUTES = {
  SINGLE_SLOT: 'single-slot',
  MULTI_SLOT: 'multi-slot',
  DEFAULT: 'single-slot'
};

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: APP_ROUTES.DEFAULT },
  {
    path: APP_ROUTES.SINGLE_SLOT,
    loadComponent: () => import('./pages/single-slot/single-slot').then(m => m.SingleSlot)
  },
  {
    path: APP_ROUTES.MULTI_SLOT,
    loadComponent: () => import('./pages/multi-slot/multi-slot').then(m => m.MultiSlot)
  }
];
