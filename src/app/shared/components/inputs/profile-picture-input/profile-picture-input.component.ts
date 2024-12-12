import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile-picture-input',
  standalone: true,
  templateUrl: './profile-picture-input.component.html',
  styleUrl: './profile-picture-input.component.scss',
  imports: [],
})
export class ProfilePictureInputComponent implements OnChanges {
  protected image?: string | ArrayBuffer | null = null;

  @Input() file!: File | string;

  public getFile(): File | null {
    return (typeof this.file === 'string') ? null : this.file;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['file']) {
      this.image = changes['file'].currentValue;
    }
  }

  protected onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.setImage(file);
      this.setFile(file);
    }
  }

  private setImage(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: ProgressEvent<FileReader>) => this.image = e?.target?.result;
  }

  private setFile(file: File): void {
    this.file = file;
  }
}
