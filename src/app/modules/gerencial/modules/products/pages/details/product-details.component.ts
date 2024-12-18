import { Component, Input, OnInit } from '@angular/core';
import { ProductInfoComponent } from '../../components/product-info/product-info.component';
import { ProductResponse, ProductService } from '../../services/products/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  imports: [
    ProductInfoComponent,
  ],
})
export class ProductDetailsComponent implements OnInit {
  @Input() productId!: string;

  public product?: ProductResponse;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct(): void {
    this.productService.findById(this.productId).subscribe((product) => {
      this.product = product;
    });
  }
}
