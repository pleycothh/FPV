import { Component, Input } from '@angular/core';
import { ProductEntity } from '../../sharing/models/productEntity.model';

@Component({
  selector: 'app-product-viewer',
  standalone: true,
  imports: [],
  templateUrl: './product-viewer.component.html',
  styleUrl: './product-viewer.component.scss'
})
export class ProductViewerComponent {

  
  @Input() productEntity: ProductEntity;

  /**
   *
   */
  constructor() {
    this.productEntity = {} as ProductEntity;
  }

}
