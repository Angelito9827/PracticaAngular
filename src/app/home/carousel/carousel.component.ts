import { Component } from '@angular/core';
import { CarouselService } from '../service/carousel-service/carousel.service';
import { InterfaceCarousel } from '../models/inteface-carousel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  images: string[] = [];

  constructor(private service: CarouselService) {}
  
  ngOnInit(): void {
    this.getCarouselImages();
  }

  private getCarouselImages() {
    this.service.getCarouselImages().subscribe(
      (data: InterfaceCarousel) => {
        this.images = [data.image1, data.image2, data.image3];
      }
    );
  }

}
