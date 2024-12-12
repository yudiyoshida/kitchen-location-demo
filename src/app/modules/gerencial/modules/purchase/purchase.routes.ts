import { Routes } from '@angular/router';
import { PurchaseDetailsComponent } from './pages/details/purchase-details.component';
import { ListPurchaseComponent } from './pages/list/list-purchase.component';

export const routes: Routes = [
  {
    path: '',
    component: ListPurchaseComponent,
    data: { title: 'Vendas' },
  },
  {
    path: 'detalhes/:purchaseId',
    component: PurchaseDetailsComponent,
    data: { title: 'Detalhes da venda' },
  },
];
