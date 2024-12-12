import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Column, CommomTableComponent } from '../../../../../../shared/components/commom-table/commom-table.component';
import { SearchInputComponent } from '../../../../../../shared/components/inputs/search-input/search-input.component';
import { RentResponse, RentService } from '../../services/rent.service';

@Component({
  selector: 'app-list-rent',
  standalone: true,
  templateUrl: './list-rent.component.html',
  styleUrl: './list-rent.component.scss',
  imports: [
    CommomTableComponent,
    SearchInputComponent,
  ],
})
export class ListRentComponent implements OnInit {
  public rent: RentResponse[] = [];
  public totalRent = 0;

  public columns: Column[] = [
    { label: 'Código', key: 'id', type: 'text' },
    { label: 'Cliente', key: 'clientName', type: 'text' },
    { label: 'Produto', key: 'productName', type: 'text' },
    { label: 'Valor (R$)', key: 'amount', type: 'currency' },
    { label: 'Status', key: 'status', type: 'text' },
    { label: 'Data inicio', key: 'startDate', type: 'date' },
    { label: 'Data fim', key: 'endDate', type: 'date' },
  ];

  constructor(
    private rentService: RentService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.findAllRent();
  }

  private findAllRent(): void {
    this.rentService.findAll().subscribe((rent) => {
      this.rent = rent;
    });
  }

  public gotoDetails(rent: RentResponse): void {
    this.router.navigate(['detalhes', rent.id], { relativeTo: this.activatedRoute });
  }
}
