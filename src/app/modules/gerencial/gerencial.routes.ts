import { Routes } from '@angular/router';
import { GerencialComponent } from './gerencial.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: GerencialComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
      { path: 'clientes', loadChildren: () => import('./modules/clients/clients.routes').then(m => m.routes) },
      { path: 'produtos', loadChildren: () => import('./modules/products/products.routes').then(m => m.routes) },
      { path: 'compras', loadChildren: () => import('./modules/purchase/purchase.routes').then(m => m.routes) },
      { path: 'financeiro', loadChildren: () => import('./modules/financial/financial.routes').then(m => m.routes) },
    ],
  },
];
