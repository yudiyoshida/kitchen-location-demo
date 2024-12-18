import { Routes } from '@angular/router';
import { authenticationGuard } from './core/guards/authentication.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.routes').then(m => m.routes),
  },
  {
    path: 'gerencial',
    loadChildren: () => import('./modules/gerencial/gerencial.routes').then(m => m.routes),
    canActivateChild: [authenticationGuard],
  },
];
