import { Routes } from '@angular/router';
import { ListPurchaseComponent } from './pages/list/list-purchase.component';

export const routes: Routes = [
  {
    path: '',
    component: ListPurchaseComponent,
    data: { title: 'Compras' },
  },
];
