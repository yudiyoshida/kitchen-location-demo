import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea-field',
  standalone: true,
  imports: [],
  templateUrl: './textarea-field.component.html',
  styleUrl: './textarea-field.component.scss',
})
export class TextareaFieldComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value!: any;
}
