import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { InfoFieldComponent } from '../../../../../../shared/components/fields/info-field/info-field.component';
import { PhotoFieldComponent } from '../../../../../../shared/components/fields/photo-field/photo-field.component';
import { ProductResponse, ProductService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  standalone: true,
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss',
  imports: [
    MatCardModule,
    InfoFieldComponent,
    PhotoFieldComponent,
  ],
})
export class ProductsDetailsComponent implements OnInit {
  @Input() productId!: string;

  public product?: ProductResponse;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.Product();
  }

  private Product(): void {
    this.productService.findById(this.productId).subscribe((product) => {
      this.product = product;
    });
  }
}
