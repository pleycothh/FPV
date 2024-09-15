import {Component, Injectable, Input} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlashService} from '../flash.service';
import { HttpClient } from '@angular/common/http';
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
  /**
   *
   */
  constructor(
   // private fs: FlashService
  ) {
    this.productEntity = {} as ProductEntity;    
  }
  calc(input: ProductEntity)
  {
    this.productEntity.sum = this.productEntity.factor1 + this.productEntity.factor2;
    console.log('calc');
    
    console.log(input);


  }
}
