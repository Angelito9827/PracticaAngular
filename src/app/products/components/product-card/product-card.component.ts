import { Component, Input } from '@angular/core';
import { InterfaceProductList } from '../models/interface-product-list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product?: InterfaceProductList;

  constructor(
    private router : Router
    
  ) {}

  ngOnInit(): void {
  
  }

  navigateToProductDetails(idProduct: number) {
    this.router.navigate(["/products/",idProduct])
  }
  
}
