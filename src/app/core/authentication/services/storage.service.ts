import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private KEY = 'ng-kichen-token';

  public getToken(): string | null {
    return localStorage.getItem(this.KEY);
  }

  public setToken(token: string): void {
    localStorage.setItem(this.KEY, token);
  }

  public removeToken(): void {
    localStorage.removeItem(this.KEY);
  }
}
