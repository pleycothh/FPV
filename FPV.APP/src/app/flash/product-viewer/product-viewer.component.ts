import { Component, Input } from '@angular/core';
import { CellsType, ProductEntity } from '../../sharing/models/productEntity.model';

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

    if(this.productEntity == null)
      {
        this.productEntity = {} as ProductEntity;
        this.productEntity.id = '123';
        this.productEntity.name = 'FPV';
        this.productEntity.framEntity = { name: '', weight: 0 };
        this.productEntity.motorEntity = { weight: 0, kvValue: 0, power: 0, torque: 0, rpm: 0, maxCurrent: 0, efficiency: 0 };
        this.productEntity.propsEntity = { name: '', weight: 0, diameter: 0, drag: 0, efficiency: 0 };
        this.productEntity.flightControlEntity = { name: '', weight: 0 };
        this.productEntity.batteryEntity = { weight: 0, power: 0, capacity: 0, rate: 0, cellsType: CellsType.None, cellNumber: 0, totalVoltage: 0, voltagePerCell: 0 };
        this.productEntity.resultEntity = { weight: 0, hoverTime: 1, maxSpeed: 0, maxRiseSpeed: 0 };
        console.log('productViewComponent reinitlized');
        console.log(this.productEntity);
      }
    
  }

}
