import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
  standalone: true,
  imports: [
  ]
})
export class ProductFormComponent {

  calc(input: any)
  {
    console.log('calc');
    
    console.log(input);
  }
}
