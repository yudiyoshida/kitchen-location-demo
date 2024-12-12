import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-container',
  standalone: true,
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss',
  imports: [],
})
export class HomeContainerComponent {
  @Input({ required: true }) image!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subtitle!: string;
}
