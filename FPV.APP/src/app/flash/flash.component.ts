import { Component} from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductViewerComponent } from './product-viewer/product-viewer.component';
import { ProductEntity } from '../sharing/models/productEntity.model';



@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css'],
  standalone: true,
  imports: [
    ProductViewerComponent,
    ProductFormComponent
  ]
})
export class FlashComponent {

  productEntity: ProductEntity;

  /**
   *
   */
  constructor() {
    this.productEntity = {} as ProductEntity;
  }

}
