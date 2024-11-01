import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceProductList } from '../components/models/interface-product-list.model';
import { InterfaceCategories } from '../components/models/interface-categories.model';
import { InterfaceProduct } from '../components/models/interface-product.model';
import { InterfaceCarousel } from '../../home/models/inteface-carousel.model';
import { InterfaceBanner } from '../../home/models/interface-banner.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<InterfaceProductList[]> {
    const urlEndPoint: string = "http://localhost:3002/products";
    return this.http.get<InterfaceProductList[]>(urlEndPoint);
  }

  public getProductDetails(idProduct: number): Observable<InterfaceProduct> {
    const urlEndPoint: string = `http://localhost:3002/products/${idProduct}`;
    return this.http.get<InterfaceProduct>(urlEndPoint);
  }

  public getCategories():Observable<InterfaceCategories[]>{
    const urlEndPoint: string = "http://localhost:3002/categories";
    return this.http.get<InterfaceCategories[]>(urlEndPoint);
  }

  public getBlackFridayPromotionImages(): Observable<InterfaceCarousel> {
    const urlEndPoint: string = "http://localhost:3002/products/black-friday-promotion";
    return this.http.get<InterfaceCarousel>(urlEndPoint);
  }

  public getBestSellerImages(): Observable<InterfaceBanner> {
    const urlEndPoint: string = "http://localhost:3002/products/best-seller";
    return this.http.get<InterfaceBanner>(urlEndPoint);
  }

}
