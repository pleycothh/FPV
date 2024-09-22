import { Component} from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductViewerComponent } from './product-viewer/product-viewer.component';
import { ProductEntity } from '../sharing/models/productEntity.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FlashService } from './flash.service';
import { RequestEntity } from '../sharing/models/request.model';



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
    this.productEntity = 
    {
      id: '',
      name: '',
      framEntity: { name: '', weight: 0 },
      motorEntity: { weight: 0, kvValue: 0, power: 0, torque: 0, rpm: 0, maxCurrent: 0, efficiency: 0 },
      propsEntity: { name: '', weight: 0, diameter: 0, drag: 0, efficiency: 0 },
      flightControlEntity: { name: '', weight: 0 },
      batteryEntity: { weight: 0, power: 0, capacity: 0, rate: 0, cellsType: 0, cellNumber: 0, totalVoltage: 0, voltagePerCell: 0 },
      resultEntity: { weight: 0, hoverTime: 0, maxSpeed: 0, maxRiseSpeed: 0 }
    };
  }

  onCalc($event: ProductEntity) {
    console.log('onCalc, flashcomponent');
    console.log($event);
    
    let RequestEntity: RequestEntity = { product: $event };
    
    this.fs.calc(RequestEntity).subscribe({
      next: (src: ProductEntity) => {
        console.log(src);
        this.productEntity = src;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('Calculation complete');
      }
    });
  }

}
