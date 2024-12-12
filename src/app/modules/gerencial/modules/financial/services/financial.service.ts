import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FinancialService {
  private data: FinancialResponse[] = [
    {
      id: '1',
      clientName: 'João da Silva',
      productName: 'Produto 1',
      amount: 100.00,
      status: 'Pendente',
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
    {
      id: '2',
      clientName: 'Maria da Silva',
      productName: 'Produto 2',
      amount: 200.00,
      status: 'Pago',
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
    {
      id: '3',
      clientName: 'José da Silva',
      productName: 'Produto 3',
      amount: 300.00,
      status: 'Pendente',
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
    {
      id: '4',
      clientName: 'Pedro da Silva',
      productName: 'Produto 4',
      amount: 400.00,
      status: 'Cancelado',
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
    {
      id: '5',
      clientName: 'Ana da Silva',
      productName: 'Produto 5',
      amount: 500.00,
      status: 'Pendente',
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
    {
      id: '6',
      clientName: 'Paulo da Silva',
      productName: 'Produto 6',
      amount: 600.00,
      status: 'Pendente',
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
  ];

  public findAll(): Observable<FinancialResponse[]> {
    return of(this.data);
  }

  public findById(id: string): Observable<FinancialResponse> {
    const financial = this.data.find((financial) => financial.id === id);

    return of(financial || {} as FinancialResponse);
  }
}

export type FinancialResponse = {
  id: string;
  clientName: string;
  productName: string;
  amount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}
