import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { StorageService } from '../../../core/authentication/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService,
  ) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.api}/login`, { email, password }).pipe(
      tap((response) => this.storageService.setToken(response.token)),
    );
  }
}

export type LoginResponse = {
  token: string;
}
