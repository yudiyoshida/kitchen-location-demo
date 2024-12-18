import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public findAll(): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(`${environment.api}/admin-products`);
  }

  public findById(id: string): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${environment.api}/admin-products/${id}`);
  }

  public create(data: any): Observable<ProductResponse> {
    return this.http.post<ProductResponse>(`${environment.api}/admin-products`, data);
  }
}

export type ProductResponse = {
  id: string;
  name: string;
  description: string;
  category: string;
  fileUrl: string;
  fileKey: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
}
