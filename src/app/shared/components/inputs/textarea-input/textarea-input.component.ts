import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-textarea-input',
  standalone: true,
  templateUrl: './textarea-input.component.html',
  styleUrl: './textarea-input.component.scss',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class TextareaInputComponent {
  @Input({ required: true }) control!: FormControl;
  @Input({ required: true }) label!: string;
}
