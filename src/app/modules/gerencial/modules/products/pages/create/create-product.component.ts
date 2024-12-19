import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ToastrService } from 'ngx-toastr';
import { ButtonFlatComponent } from '../../../../../../shared/components/button-flat/button-flat.component';
import { ImageUploadInputComponent } from '../../../../../../shared/components/inputs/image-upload-input/image-upload-input.component';
import { SelectInputComponent } from '../../../../../../shared/components/inputs/select-input/select-input.component';
import { TextInputComponent } from '../../../../../../shared/components/inputs/text-input/text-input.component';
import { TextareaInputComponent } from '../../../../../../shared/components/inputs/textarea-input/textarea-input.component';
import { CategoryResponse, CategoryService } from '../../services/categories/categories.service';
import { ProductService } from '../../services/products/products.service';
import { UploadFileResponse, UploadFileService } from '../../services/upload-file/upload-file.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    ButtonFlatComponent,
    ImageUploadInputComponent,
    SelectInputComponent,
    TextareaInputComponent,
    TextInputComponent,
  ],
})
export class CreateProductComponent implements OnInit {
  @ViewChild('productImage') private productImage!: ImageUploadInputComponent;

  public categories!: CategoryResponse[];

  public form = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    stock: ['', [Validators.required]],
    categoryId: ['', [Validators.required]],
    price: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(): void {
    this.categoryService.findAll().subscribe((categories) => {
      this.categories = categories;
    });
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private location: Location,
    private toastr: ToastrService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private uploadFileService: UploadFileService,
  ) {}

  public submit(): void {
    const image = this.productImage.file;
    if (!image) {
      this.toastr.error('Selecione uma imagem para o produto');
      return;
    }

    this.uploadFileService.uploadFile(image).subscribe((uploadResponse) => {
      this.createProduct(uploadResponse);
    });
  }

  private createProduct(fileUploaded: UploadFileResponse): void {
    const data = {
      ...this.form.getRawValue(),
      fileKey: fileUploaded.fileKey,
      fileUrl: fileUploaded.fileUrl,
    };

    this.productService.create(data).subscribe(() => {
      this.toastr.success('Produto criado com sucesso!');
      this.location.back();
    });
  }
}
