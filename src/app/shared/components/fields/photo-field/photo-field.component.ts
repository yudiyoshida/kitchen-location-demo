import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-field',
  standalone: true,
  templateUrl: './photo-field.component.html',
  styleUrl: './photo-field.component.scss',
  imports: [],
})
export class PhotoFieldComponent {
  @Input({ required: true }) imageUrl?: string;
  @Input() alt?: string;
}
