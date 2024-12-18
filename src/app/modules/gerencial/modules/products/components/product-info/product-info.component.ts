import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { InfoFieldComponent } from '../../../../../../shared/components/fields/info-field/info-field.component';
import { PhotoFieldComponent } from '../../../../../../shared/components/fields/photo-field/photo-field.component';
import { ProductResponse } from '../../services/products/products.service';

@Component({
  selector: 'app-product-info',
  standalone: true,
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss',
  imports: [
    MatCardModule,
    InfoFieldComponent,
    PhotoFieldComponent,
  ],
})
export class ProductInfoComponent {
  @Input({ required: true }) product?: ProductResponse;
}
