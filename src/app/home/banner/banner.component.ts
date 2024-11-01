import { Component } from '@angular/core';
import { InterfaceBanner } from '../models/interface-banner.model';
import { HomeService } from '../service/home-services.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  images: string[] = [];

  constructor(private service: HomeService) {}

  ngOnInit(): void {
    this.getBannerImages();
  }

  private getBannerImages() {
    this.service.getBannerImages().subscribe(
      (data: InterfaceBanner) => {
        this.images = [data.image1, data.image2, data.image3];
      }
    );
  }

}
