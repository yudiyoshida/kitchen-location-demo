import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-field',
  standalone: true,
  templateUrl: './info-field.component.html',
  styleUrl: './info-field.component.scss',
  imports: [],
})
export class InfoFieldComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value!: any;
  @Input() type!: 'text' | 'date' | 'currency' | 'document' | 'phone' | 'status' | 'blocked';
}
