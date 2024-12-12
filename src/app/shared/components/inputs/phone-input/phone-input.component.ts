import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-phone-input',
  standalone: true,
  templateUrl: './phone-input.component.html',
  styleUrl: './phone-input.component.scss',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskDirective,
  ],
})
export class PhoneInputComponent {
  @Input({ required: true }) control!: FormControl;
  @Input({ required: true }) label!: string;
}
