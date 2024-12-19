import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-number-input',
  standalone: true,
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.scss',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class NumberInputComponent {
  @Input({ required: true }) control!: FormControl;
  @Input({ required: true }) label!: string;
}
