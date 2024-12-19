import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonFlatComponent } from '../../../../../../shared/components/button-flat/button-flat.component';
import { Column, CommomTableComponent } from '../../../../../../shared/components/commom-table/commom-table.component';
import { SearchInputComponent } from '../../../../../../shared/components/inputs/search-input/search-input.component';
import { ProductResponse, ProductService } from '../../services/products/products.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss',
  imports: [
    ButtonFlatComponent,
    CommomTableComponent,
    SearchInputComponent,
  ],
})
export class ListProductsComponent implements OnInit {
  public products: ProductResponse[] = [];
  public totalProducts = 0;

  public columns: Column[] = [
    { label: 'Nome', key: 'name', type: 'text' },
    { label: 'Descrição', key: 'description', type: 'text' },
    { label: 'Categoria', key: 'category', type: 'text' },
    { label: 'Em estoque', key: 'stock', type: 'text' },
    { label: 'Produto cadastrado em', key: 'createdAt', type: 'date' },
  ];

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.findAllProducts();
  }

  private findAllProducts(): void {
    this.productService.findAll().subscribe((products) => {
      this.products = products.map((product) => ({
        ...product,
        category: product.categories[0].name,
      }));
    });
  }

  public gotoCreate(): void {
    this.router.navigate(['cadastrar'], { relativeTo: this.activatedRoute });
  }

  public gotoDetails(product: ProductResponse): void {
    this.router.navigate(['detalhes', product.id], { relativeTo: this.activatedRoute });
  }
}
