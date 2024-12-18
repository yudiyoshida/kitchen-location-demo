import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Column, CommomTableComponent } from '../../../../../../shared/components/commom-table/commom-table.component';
import { SearchInputComponent } from '../../../../../../shared/components/inputs/search-input/search-input.component';
import { ClientResponse, ClientService } from '../../services/clients.service';

@Component({
  selector: 'app-list-clients',
  standalone: true,
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.scss',
  imports: [
    CommomTableComponent,
    SearchInputComponent,
  ],
})
export class ListClientsComponent implements OnInit {
  public clients: ClientResponse[] = [];
  public totalClients = 0;

  public columns: Column[] = [
    { label: 'Nome', key: 'name', type: 'text' },
    { label: 'E-mail', key: 'email', type: 'text' },
    { label: 'Telefone', key: 'phone', type: 'phone' },
    { label: 'Conta criada em', key: 'createdAt', type: 'text' },
  ];

  constructor(
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.findAllClients();
  }

  private findAllClients(): void {
    this.clientService.findAll().subscribe((clients) => {
      this.clients = clients;
    });
  }

  public gotoDetails(client: ClientResponse): void {
    this.router.navigate(['detalhes', client.id], { relativeTo: this.activatedRoute });
  }
}
