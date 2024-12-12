import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ToastrService } from 'ngx-toastr';
import { ButtonFlatComponent } from '../../../../../../shared/components/button-flat/button-flat.component';
import { ImageUploadInputComponent } from '../../../../../../shared/components/inputs/image-upload-input/image-upload-input.component';
import { TextInputComponent } from '../../../../../../shared/components/inputs/text-input/text-input.component';
import { TextareaInputComponent } from '../../../../../../shared/components/inputs/textarea-input/textarea-input.component';

@Component({
  selector: 'app-create-product',
  standalone: true,
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    ImageUploadInputComponent,
    TextInputComponent,
    ButtonFlatComponent,
    TextareaInputComponent,
  ],
})
export class CreateProductComponent {
  @ViewChild('productImage') private productImage!: ImageUploadInputComponent;

  public form = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    stock: ['', [Validators.required]],
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private location: Location,
    private toastr: ToastrService,
  ) {}

  public submit(): void {
    const image = this.productImage.file;
    if (!image) {
      this.toastr.error('Selecione uma imagem para o product');
      return;
    }

    this.toastr.success('Produto criado com sucesso!');
    this.location.back();
  }
}
