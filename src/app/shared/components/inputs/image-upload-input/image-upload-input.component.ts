import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ImagePreviewDialogComponent } from '../../../dialogs/image-preview-dialog/image-preview-dialog.component';

export type FileUpload = File | string | null | undefined;

@Component({
  selector: 'app-image-upload-input',
  standalone: true,
  templateUrl: './image-upload-input.component.html',
  styleUrl: './image-upload-input.component.scss',
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
})
export class ImageUploadInputComponent implements OnChanges {
  protected image?: string | ArrayBuffer | null;

  @Input() file: FileUpload;

  constructor(
    private dialog: MatDialog,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['file']) {
      this.readImage(changes['file'].currentValue);
    }
  }

  private readImage(image: File | string): void {
    if (typeof image === 'string') {
      this.image = image;
      return;
    }

    if (image instanceof File) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        this.image = reader.result;
      };
    }
  }

  public setImage(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.readImage(file);
      this.setFile(file);
    }
  }

  public clearImage(): void {
    this.image = null;
    this.setFile(null);
  }

  public openImagePreview(): void {
    this.dialog.open(ImagePreviewDialogComponent, {
      data: { image: this.image },
      height: '80%',
    });
  }

  private setFile(file: File | null): void {
    this.file = file;
  }
}
