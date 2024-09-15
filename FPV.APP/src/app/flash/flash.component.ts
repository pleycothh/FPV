import { Component} from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductViewerComponent } from './product-viewer/product-viewer.component';



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

}
