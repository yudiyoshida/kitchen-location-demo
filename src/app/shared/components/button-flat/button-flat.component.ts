import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-flat',
  standalone: true,
  templateUrl: './button-flat.component.html',
  styleUrl: './button-flat.component.scss',
  imports: [
    MatButtonModule,
  ],
})
export class ButtonFlatComponent {
  @Input({ required: true }) label!: string;
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled: boolean = false;

  @Output() clickEvent = new EventEmitter<void>();
}
