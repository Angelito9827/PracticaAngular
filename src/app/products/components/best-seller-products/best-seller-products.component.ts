import { Component, Input } from '@angular/core';
import { InterfaceBanner } from '../../../home/models/interface-banner.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-best-seller-products',
  templateUrl: './best-seller-products.component.html',
  styleUrl: './best-seller-products.component.scss',
  standalone: true,
  imports:[CommonModule]
})
export class BestSellerProductsComponent {
  @Input() bestSellerProduct?: InterfaceBanner;

  constructor(
    
  ) {}

  ngOnInit(): void {
  
  }
}
