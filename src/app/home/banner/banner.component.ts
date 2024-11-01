import { Component } from '@angular/core';
import { InterfaceBanner } from '../models/interface-banner.model';
import { ProductService } from '../../products/service/product.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  images: string[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.getBannerImages();
  }

  private getBannerImages() {
    this.service.getBestSellerImages().subscribe(
      (data: InterfaceBanner) => {
        this.images = [data.image1, data.image2, data.image3];
      }
    );
  }

}
