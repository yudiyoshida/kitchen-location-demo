import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { map, shareReplay } from 'rxjs/operators';
import { StorageService } from '../../../core/authentication/services/storage.service';
import { SidenavLinkComponent } from './components/sidenav-link/sidenav-link.component';
import { TitleComponent } from './components/title/title.component';

export type SidenavLink = {
  label: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    SidenavLinkComponent,
    TitleComponent,
  ],
})
export class SidenavComponent {
  @Input() links!: SidenavLink[];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private storageService: StorageService,
  ) {}

  // Breakpoints.Handset = 960px
  public isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay(),
  );

  public logout() {
    this.storageService.removeToken();
    this.router.navigate(['/']);
  }
}
