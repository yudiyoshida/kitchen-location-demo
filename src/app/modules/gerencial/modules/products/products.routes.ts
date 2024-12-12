import { Routes } from '@angular/router';
import { CreateProductComponent } from './pages/create/create-product.component';
import { ProductDetailsComponent } from './pages/details/product-details.component';
import { ListProductsComponent } from './pages/list/list-products.component';

export const routes: Routes = [
  {
    path: '',
    component: ListProductsComponent,
    data: { title: 'Produtos' },
  },
  {
    path: 'cadastrar',
    component: CreateProductComponent,
    data: { title: 'Cadastrar produto' },
  },
  {
    path: 'detalhes/:productId',
    component: ProductDetailsComponent,
    data: { title: 'Detalhes do produto' },
  },
];
