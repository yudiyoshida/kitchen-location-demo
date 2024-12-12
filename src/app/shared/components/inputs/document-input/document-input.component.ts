import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-document-input',
  standalone: true,
  templateUrl: './document-input.component.html',
  styleUrl: './document-input.component.scss',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskDirective,
  ],
})
export class DocumentInputComponent {
  @Input({ required: true }) control!: FormControl;
}
