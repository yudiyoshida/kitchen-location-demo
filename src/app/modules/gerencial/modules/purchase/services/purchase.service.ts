import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  private data: PurchaseResponse[] = [
    {
      id: '1',
      clientName: 'João da Silva',
      amount: 100.00,
      status: 'Pendente',
      products: 1,
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
    {
      id: '2',
      clientName: 'Maria da Silva',
      amount: 200.00,
      status: 'Pago',
      products: 2,
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
    {
      id: '3',
      clientName: 'José da Silva',
      amount: 300.00,
      status: 'Pendente',
      products: 3,
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
    {
      id: '4',
      clientName: 'Pedro da Silva',
      amount: 400.00,
      status: 'Cancelado',
      products: 4,
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
    {
      id: '5',
      clientName: 'Ana da Silva',
      amount: 500.00,
      status: 'Pendente',
      products: 5,
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
    {
      id: '6',
      clientName: 'Paulo da Silva',
      amount: 600.00,
      status: 'Pendente',
      products: 6,
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
  ];

  public findAll(): Observable<PurchaseResponse[]> {
    return of(this.data);
  }

  public findById(id: string): Observable<PurchaseResponse> {
    const financial = this.data.find((financial) => financial.id === id);

    return of(financial || {} as PurchaseResponse);
  }
}

export type PurchaseResponse = {
  id: string;
  clientName: string;
  amount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  products: number;
}
