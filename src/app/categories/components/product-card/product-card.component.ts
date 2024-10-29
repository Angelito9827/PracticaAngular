import { Component, Input } from '@angular/core';
import { InterfaceProduct } from '../models/interaface-product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product?: InterfaceProduct;

  ngOnInit(): void {
  
  }
  
}
