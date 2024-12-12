import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ButtonFlatComponent } from '../../../../../../shared/components/button-flat/button-flat.component';
import { InfoFieldComponent } from '../../../../../../shared/components/fields/info-field/info-field.component';
import { TimelineComponent, TimelineEvent } from '../../../../../../shared/components/timeline/timeline.component';
import { ProductInfoComponent } from '../../../products/components/product-info/product-info.component';
import { ProductResponse, ProductService } from '../../../products/services/products.service';
import { RentResponse, RentService } from '../../services/rent.service';

@Component({
  selector: 'app-rent-details',
  standalone: true,
  templateUrl: './rent-details.component.html',
  styleUrl: './rent-details.component.scss',
  imports: [
    MatCardModule,
    TimelineComponent,
    InfoFieldComponent,
    ButtonFlatComponent,
    ProductInfoComponent,
  ],
})
export class RentDetailsComponent implements OnInit {
  @Input() rentId!: string;

  public rent?: RentResponse;
  public products?: ProductResponse[] = [];

  public events: TimelineEvent[] = [
    { icon: 'restart_alt', completed: true, title: 'Aguardando' },
    { icon: 'check_circle', completed: true, title: 'Confirmado' },
    { icon: 'task', completed: false, title: 'Em separação' },
    { icon: 'local_shipping', completed: false, title: 'Em transporte' },
    { icon: 'check_circle', completed: false, title: 'Entregue' },
  ];

  constructor(
    private rentService: RentService,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.getRent();
    this.getProducts();
  }

  private getRent(): void {
    this.rentService.findById(this.rentId).subscribe((rent) => {
      this.rent = rent;
    });
  }

  private getProducts(): void {
    this.productService.findAll().subscribe((products) => {
      this.products = products.slice(0, 3);
    });
  }
}
