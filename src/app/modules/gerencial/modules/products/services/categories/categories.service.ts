import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  public findAll(): Observable<CategoryResponse[]> {
    return this.http.get<CategoryResponse[]>(`${environment.api}/admin-products/all-categories`);
  }
}

export type CategoryResponse = {
  id: string;
  name: string;
}
