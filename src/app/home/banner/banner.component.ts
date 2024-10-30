import { Component } from '@angular/core';
import { BannerService } from '../service/banner-service/banner.service';
import { InterfaceBanner } from '../models/interface-banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  images: string[] = [];

  constructor(private service: BannerService) {}

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
