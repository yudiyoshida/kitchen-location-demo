import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { InfoFieldComponent } from '../../../../../../shared/components/fields/info-field/info-field.component';
import { PhotoFieldComponent } from '../../../../../../shared/components/fields/photo-field/photo-field.component';
import { ClientResponse, ClientService } from '../../services/clients.service';

@Component({
  selector: 'app-clients-details',
  standalone: true,
  templateUrl: './clients-details.component.html',
  styleUrl: './clients-details.component.scss',
  imports: [
    MatCardModule,
    InfoFieldComponent,
    PhotoFieldComponent,
  ],
})
export class ClientsDetailsComponent implements OnInit {
  @Input() clientId!: string;

  public client?: ClientResponse;

  constructor(
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this.getClient();
  }

  private getClient(): void {
    this.clientService.findById(this.clientId).subscribe((client) => {
      this.client = client;
    });
  }
}
