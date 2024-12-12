import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidenav-link',
  standalone: true,
  templateUrl: './sidenav-link.component.html',
  styleUrl: './sidenav-link.component.scss',
  imports: [
    MatIconModule,
    MatListModule,
  ],
})
export class SidenavLinkComponent {
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) label!: string;
}
