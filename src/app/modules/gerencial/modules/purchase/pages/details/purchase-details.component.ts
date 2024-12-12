import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ButtonFlatComponent } from '../../../../../../shared/components/button-flat/button-flat.component';
import { InfoFieldComponent } from '../../../../../../shared/components/fields/info-field/info-field.component';
import { TimelineComponent, TimelineEvent } from '../../../../../../shared/components/timeline/timeline.component';
import { ProductInfoComponent } from '../../../products/components/product-info/product-info.component';
import { ProductResponse, ProductService } from '../../../products/services/products.service';
import { PurchaseResponse, PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-purchase-details',
  standalone: true,
  templateUrl: './purchase-details.component.html',
  styleUrl: './purchase-details.component.scss',
  imports: [
    MatCardModule,
    TimelineComponent,
    InfoFieldComponent,
    ButtonFlatComponent,
    ProductInfoComponent,
  ],
})
export class PurchaseDetailsComponent implements OnInit {
  @Input() purchaseId!: string;

  public purchase?: PurchaseResponse;
  public products?: ProductResponse[] = [];

  public events: TimelineEvent[] = [
    { icon: 'restart_alt', completed: true, title: 'Aguardando' },
    { icon: 'check_circle', completed: true, title: 'Confirmado' },
    { icon: 'task', completed: false, title: 'Em separação' },
    { icon: 'local_shipping', completed: false, title: 'Em transporte' },
    { icon: 'check_circle', completed: false, title: 'Entregue' },
  ];

  constructor(
    private purchaseService: PurchaseService,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.getPurchase();
    this.getProducts();
  }

  private getPurchase(): void {
    this.purchaseService.findById(this.purchaseId).subscribe((purchase) => {
      this.purchase = purchase;
    });
  }

  private getProducts(): void {
    this.productService.findAll().subscribe((products) => {
      this.products = products.slice(0, 3);
    });
  }
}
