import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Column, CommomTableComponent } from '../../../../../../shared/components/commom-table/commom-table.component';
import { SearchInputComponent } from '../../../../../../shared/components/inputs/search-input/search-input.component';
import { FinancialResponse, FinancialService } from '../../services/financial.service';

@Component({
  selector: 'app-list-financial',
  standalone: true,
  templateUrl: './list-financial.component.html',
  styleUrl: './list-financial.component.scss',
  imports: [
    CommomTableComponent,
    SearchInputComponent,
  ],
})
export class ListFinancialsComponent implements OnInit {
  public financial: FinancialResponse[] = [];
  public totalFinancials = 0;

  public columns: Column[] = [
    { label: 'Código', key: 'id', type: 'text' },
    { label: 'Cliente', key: 'clientName', type: 'text' },
    { label: 'Produto', key: 'productName', type: 'text' },
    { label: 'Valor (R$)', key: 'amount', type: 'currency' },
    { label: 'Status', key: 'status', type: 'text' },
    { label: 'Data transação', key: 'createdAt', type: 'date' },
  ];

  constructor(
    private financialService: FinancialService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.findAllFinancials();
  }

  private findAllFinancials(): void {
    this.financialService.findAll().subscribe((financial) => {
      this.financial = financial;
    });
  }
}
