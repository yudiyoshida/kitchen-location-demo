import { Component } from '@angular/core';
import { SidenavComponent, SidenavLink } from '../../shared/components/sidenav/sidenav.component';

@Component({
  selector: 'app-gerencial',
  standalone: true,
  imports: [SidenavComponent],
  template: '<app-sidenav [links]="links" />',
})
export class GerencialComponent {
  public links: SidenavLink[] = [
    { label: 'Dashboard', icon: 'dashboard', url: '/gerencial/dashboard' },
    { label: 'Clientes', icon: 'people', url: '/gerencial/clientes' },
    { label: 'Produtos', icon: 'checkroom', url: '/gerencial/produtos' },
    { label: 'Compras', icon: 'shopping_cart', url: '/gerencial/compras' },
    { label: 'Financeiro', icon: 'attach_money', url: '/gerencial/financeiro' },
    // { label: 'Administradores', icon: 'admin_panel_settings', url: '/gerencial/administradores' },
  ];
}
