import { Routes } from '@angular/router';
import { ListFinancialsComponent } from './pages/list/list-financial.component';

export const routes: Routes = [
  {
    path: '',
    component: ListFinancialsComponent,
    data: { title: 'Financeiro' },
  },
];
