import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Column, CommomTableComponent } from '../../../../../../shared/components/commom-table/commom-table.component';
import { SearchInputComponent } from '../../../../../../shared/components/inputs/search-input/search-input.component';
import { ProductResponse, ProductService } from '../../services/products.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss',
  imports: [
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
      this.products = products;
    });
  }

  public gotoDetails(product: ProductResponse): void {
    this.router.navigate(['detalhes', product.id], { relativeTo: this.activatedRoute });
  }
}
