import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RentService {
  private data: RentResponse[] = [
    {
      id: '1',
      clientName: 'João da Silva',
      productName: 'Fogão industrial 6 bocas',
      amount: 100.00,
      status: 'Pendente',
      startDate: '01/12/2024',
      endDate: '15/12/2024',
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
    {
      id: '2',
      clientName: 'Maria da Silva',
      productName: 'Fogão industrial 6 bocas',
      amount: 200.00,
      status: 'Pago',
      startDate: '01/12/2024',
      endDate: '15/12/2024',
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
    {
      id: '3',
      clientName: 'José da Silva',
      productName: 'Fogão industrial 6 bocas',
      amount: 300.00,
      status: 'Finalizado',
      startDate: '01/12/2024',
      endDate: '15/12/2024',
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
    {
      id: '4',
      clientName: 'Pedro da Silva',
      productName: 'Fogão industrial 6 bocas',
      amount: 400.00,
      status: 'Cancelado',
      startDate: '01/12/2024',
      endDate: '15/12/2024',
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
    {
      id: '5',
      clientName: 'Ana da Silva',
      productName: 'Fogão industrial 6 bocas',
      amount: 500.00,
      status: 'Pendente',
      startDate: '01/12/2024',
      endDate: '15/12/2024',
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
    {
      id: '6',
      clientName: 'Paulo da Silva',
      productName: 'Fogão industrial 6 bocas',
      amount: 600.00,
      status: 'Pendente',
      startDate: '01/12/2024',
      endDate: '15/12/2024',
      createdAt: '12/12/2024',
      updatedAt: '12/12/2024',
    },
  ];

  public findAll(): Observable<RentResponse[]> {
    return of(this.data);
  }

  public findById(id: string): Observable<RentResponse> {
    const financial = this.data.find((financial) => financial.id === id);

    return of(financial || {} as RentResponse);
  }
}

export type RentResponse = {
  id: string;
  clientName: string;
  productName: string;
  amount: number;
  status: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
}
