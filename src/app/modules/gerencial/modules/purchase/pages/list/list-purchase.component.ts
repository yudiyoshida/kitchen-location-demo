import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Column, CommomTableComponent } from '../../../../../../shared/components/commom-table/commom-table.component';
import { SearchInputComponent } from '../../../../../../shared/components/inputs/search-input/search-input.component';
import { PurchaseResponse, PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-list-purchase',
  standalone: true,
  templateUrl: './list-purchase.component.html',
  styleUrl: './list-purchase.component.scss',
  imports: [
    CommomTableComponent,
    SearchInputComponent,
  ],
})
export class ListPurchaseComponent implements OnInit {
  public purchase: PurchaseResponse[] = [];
  public totalPurchase = 0;

  public columns: Column[] = [
    { label: 'Código', key: 'id', type: 'text' },
    { label: 'Cliente', key: 'clientName', type: 'text' },
    { label: 'Produtos qtd', key: 'products', type: 'text' },
    { label: 'Valor (R$)', key: 'amount', type: 'currency' },
    { label: 'Status', key: 'status', type: 'text' },
    { label: 'Data transação', key: 'createdAt', type: 'text' },
  ];

  constructor(
    private purchaseService: PurchaseService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.findAllPurchase();
  }

  private findAllPurchase(): void {
    this.purchaseService.findAll().subscribe((purchase) => {
      this.purchase = purchase;
    });
  }

  public gotoDetails(purchase: PurchaseResponse): void {
    this.router.navigate(['detalhes', purchase.id], { relativeTo: this.activatedRoute });
  }
}
