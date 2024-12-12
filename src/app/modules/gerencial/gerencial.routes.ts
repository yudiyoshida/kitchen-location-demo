import { Routes } from '@angular/router';
import { GerencialComponent } from './gerencial.component';

export const routes: Routes = [
  {
    path: '',
    component: GerencialComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'clientes' },
      { path: 'clientes', loadChildren: () => import('./modules/clients/clients.routes').then(m => m.routes) },
    ],
  },
];
