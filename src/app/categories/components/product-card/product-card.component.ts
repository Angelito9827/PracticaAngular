import { Component, Input } from '@angular/core';
import { InterfaceProduct } from '../models/interaface-product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product?: InterfaceProduct;

  constructor(
    private router : Router
    
  ) {}

  ngOnInit(): void {
  
  }

  navigateToProductDetails(idProduct: number) {
    this.router.navigate(["/categories/products/",idProduct])
  }
  
}
