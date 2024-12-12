import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-detail-actions',
  standalone: true,
  templateUrl: './detail-actions.component.html',
  styleUrl: './detail-actions.component.scss',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    NgClass,
  ],
})
export class DetailActionsComponent {
  @Input() align: 'start' | 'center' | 'end' = 'start';
  @Input() showEdit = true;
  @Input() showDelete = true;
  @Input() showToggle = true;

  @Output() editClick = new EventEmitter<void>();
  @Output() deleteClick = new EventEmitter<void>();
  @Output() toggleClick = new EventEmitter<void>();
}
