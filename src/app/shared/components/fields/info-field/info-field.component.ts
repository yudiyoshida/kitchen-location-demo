import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BlockedPipe } from '../../../pipes/blocked/blocked.pipe';
import { DocumentPipe } from '../../../pipes/document/document.pipe';
import { PhonePipe } from '../../../pipes/phone/phone.pipe';
import { StatusPipe } from '../../../pipes/status/status.pipe';

@Component({
  selector: 'app-info-field',
  standalone: true,
  templateUrl: './info-field.component.html',
  styleUrl: './info-field.component.scss',
  imports: [
    BlockedPipe,
    DatePipe,
    CurrencyPipe,
    DocumentPipe,
    PhonePipe,
    StatusPipe,
  ],
})
export class InfoFieldComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value!: any;
  @Input() type!: 'text' | 'date' | 'currency' | 'document' | 'phone' | 'status' | 'blocked';
}
