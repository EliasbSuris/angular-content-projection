import { Routes } from '@angular/router';

export const APP_ROUTES = {
  SINGLE_SLOT: 'single-slot',
  MULTI_SLOT: 'multi-slot',
  CONTENT_CHILD_TEMPLATE: 'content-child-template',
  TEMPLATE_CONTEXT: 'template-context',
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
  },
  {
    path: APP_ROUTES.CONTENT_CHILD_TEMPLATE,
    loadComponent: () =>
      import('./pages/content-child-template/content-child-template').then(m => m.ContentChildTemplate)
  },
  {
    path: APP_ROUTES.TEMPLATE_CONTEXT,
    loadComponent: () => import('./pages/template-context/template-context').then(m => m.TemplateContext)
  }
];
