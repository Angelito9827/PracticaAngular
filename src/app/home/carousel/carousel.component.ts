import { Component } from '@angular/core';
import { InterfaceCarousel } from '../models/inteface-carousel.model';
import { ProductService } from '../../categories/service/product.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  images: string[] = [];

  constructor(private service: ProductService) {}
  
  ngOnInit(): void {
    this.getCarouselImages();
  }

  private getCarouselImages() {
    this.service.getBlackFridayPromotionImages().subscribe(
      (data: InterfaceCarousel) => {
        this.images = [data.image1, data.image2, data.image3];
      }
    );
  }

}
