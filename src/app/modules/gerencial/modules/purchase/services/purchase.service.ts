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
  productName: string;
  amount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  products?: PurchaseProduct[];
}

export type PurchaseProduct = {
  id: string;
  name: string;
  quantity: number;
  imageUrl: string;
}
