import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductEntity } from '../../sharing/models/productEntity.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
//@Injectable({providedIn: 'root'})

export class ProductFormComponent {
  @Input() productEntity: ProductEntity;
  @Output() calc: EventEmitter<ProductEntity> = new EventEmitter<ProductEntity>();
  /**
   *
   */
  constructor(
   // private fs: FlashService
  ) {
    this.productEntity = {} as ProductEntity;    
  }
  onCalc(input: ProductEntity)
  {
    console.log('onCalc, productFormComponent');
    this.calc.emit(input);
  
  }

}
