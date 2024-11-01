import { Component } from '@angular/core';
import { InterfaceCarousel } from '../models/inteface-carousel.model';
import { HomeService } from '../service/home-services.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  images: string[] = [];

  constructor(private service: HomeService) {}
  
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
