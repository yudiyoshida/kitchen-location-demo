import { Routes } from '@angular/router';
import { ClientsDetailsComponent } from './pages/details/clients-details.component';
import { ListClientsComponent } from './pages/list/list-clients.component';

export const routes: Routes = [
  {
    path: '',
    component: ListClientsComponent,
    data: { title: 'Clientes' },
  },
  {
    path: 'detalhes/:clientId',
    component: ClientsDetailsComponent,
    data: { title: 'Detalhes do cliente' },
  },
];
