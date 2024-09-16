import { Component} from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductViewerComponent } from './product-viewer/product-viewer.component';
import { ProductEntity } from '../sharing/models/productEntity.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FlashService } from './flash.service';
import e from 'express';



@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css'],
  standalone: true,
  imports: [
    ProductViewerComponent,
    ProductFormComponent,
  ]
})
export class FlashComponent {

  productEntity: ProductEntity;
  /**
   *
   */
  constructor(    
    private fs: FlashService, 
  ) {
    this.productEntity = {} as ProductEntity;
  }

  onCalc($event: any) {
    console.log('onCalc, flashcomponent');
    console.log($event);
    this.fs.calc($event).subscribe(
      (data) => {
        console.log(data);
        this.productEntity = data;
      }, error => {
        console.log(error);
      }
    );
  }

}
