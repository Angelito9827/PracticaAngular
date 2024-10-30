import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceCarousel } from '../../models/inteface-carousel.model';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(
    private http: HttpClient
  ) { }

  public getCarouselImages(): Observable<InterfaceCarousel> {
    const urlEndPoint: string = "http://localhost:3002/carousel";
    return this.http.get<InterfaceCarousel>(urlEndPoint);
  }
}
