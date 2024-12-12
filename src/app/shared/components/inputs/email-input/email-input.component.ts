import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-email-input',
  standalone: true,
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.scss',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class EmailInputComponent {
  @Input({ required: true }) control!: FormControl;
}
