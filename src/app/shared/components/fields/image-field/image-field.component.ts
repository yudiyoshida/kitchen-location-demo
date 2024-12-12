import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ImagePreviewDialogComponent } from '../../../dialogs/image-preview-dialog/image-preview-dialog.component';

@Component({
  selector: 'app-image-field',
  standalone: true,
  templateUrl: './image-field.component.html',
  styleUrl: './image-field.component.scss',
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
})
export class ImageFieldComponent {
  @Input() image?: string;

  constructor(
    private dialog: MatDialog,
  ) {}

  public openImagePreview(): void {
    this.dialog.open(ImagePreviewDialogComponent, {
      data: { image: this.image },
      height: '80%',
    });
  }
}
