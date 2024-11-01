import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceCarousel } from '../models/inteface-carousel.model';
import { HttpClient } from '@angular/common/http';
import { InterfaceBanner } from '../models/interface-banner.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  public getCarouselImages(): Observable<InterfaceCarousel> {
    const urlEndPoint: string = "http://localhost:3002/carousel";
    return this.http.get<InterfaceCarousel>(urlEndPoint);
  }

  public getBannerImages(): Observable<InterfaceBanner> {
    const urlEndPoint: string = "http://localhost:3002/banner";
    return this.http.get<InterfaceBanner>(urlEndPoint);
  }
}
