import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private _title!: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this._title = this.getTitleFromRoute(this.router.routerState.snapshot.root);
      }
    });
  }

  private getTitleFromRoute(route: any): string {
    if (route.firstChild) {
      return this.getTitleFromRoute(route.firstChild);
    }

    return route.data.title;
  }

  public getTitle(): string {
    return this._title;
  }
}
