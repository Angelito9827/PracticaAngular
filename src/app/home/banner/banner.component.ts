import { Component, Input } from '@angular/core';
import { InterfaceBanner } from '../models/interface-banner.model';
import { ProductService } from '../../products/service/product.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input() product?: InterfaceBanner;
  bestSellerProducts: InterfaceBanner[] = [];

  constructor(
    private service: ProductService) {}

  ngOnInit(): void {
    this.getBestSellerProducts();
  }

  private getBestSellerProducts() {
    this.service.getBestSellerProducts().subscribe(
      (data: InterfaceBanner[]) => {
        this.bestSellerProducts = data;
      }
    );
  }

}
