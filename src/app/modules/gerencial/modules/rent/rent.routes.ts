import { Routes } from '@angular/router';
import { RentDetailsComponent } from './pages/details/rent-details.component';
import { ListRentComponent } from './pages/list/list-rent.component';

export const routes: Routes = [
  {
    path: '',
    component: ListRentComponent,
    data: { title: 'Locações' },
  },
  {
    path: 'detalhes/:rentId',
    component: RentDetailsComponent,
    data: { title: 'Detalhes da locação' },
  },
];
