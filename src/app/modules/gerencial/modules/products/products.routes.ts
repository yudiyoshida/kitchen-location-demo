import { Routes } from '@angular/router';
import { ProductsDetailsComponent } from './pages/details/products-details.component';
import { ListProductsComponent } from './pages/list/list-products.component';

export const routes: Routes = [
  {
    path: '',
    component: ListProductsComponent,
    data: { title: 'Produtos' },
  },
  {
    path: 'detalhes/:productId',
    component: ProductsDetailsComponent,
    data: { title: 'Detalhes do produto' },
  },
];
