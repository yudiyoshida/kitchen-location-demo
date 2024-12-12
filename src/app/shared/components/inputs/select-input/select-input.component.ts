import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-select-input',
  standalone: true,
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.scss',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class SelectInputComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) options?: any[];
  @Input() control: FormControl = new FormControl();
  @Input() optionKey!: string;
  @Input() optionLabel!: string;
  @Input() includeAllOptions = false;

  @Output() valueChange = new EventEmitter<any>();
}
