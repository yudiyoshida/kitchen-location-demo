import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  // public findAll(): Observable<CategoryResponse[]> {
  //   return this.http.get<CategoryResponse[]>(`${environment.api}/admin/categories`);
  // }

  public findAll(): Observable<CategoryResponse[]> {
    return of([
      {
        id: '1',
        name: 'Category 1',
      },
      {
        id: '2',
        name: 'Category 2',
      },
      {
        id: '3',
        name: 'Category 3',
      },
    ]);
  }
}

export type CategoryResponse = {
  id: string;
  name: string;
}
