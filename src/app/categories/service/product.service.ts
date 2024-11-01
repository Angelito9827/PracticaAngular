import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceProduct } from '../components/models/interaface-product.model';
import { InterfaceCategories } from '../components/models/interface-categories.model';
import { InterfaceDetails } from '../components/models/interface-details.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<InterfaceProduct[]> {
    const urlEndPoint: string = "http://localhost:3002/products";
    return this.http.get<InterfaceProduct[]>(urlEndPoint);
  }

  public getProductDetails(idProduct: number): Observable<InterfaceDetails> {
    const urlEndPoint: string = `http://localhost:3002/products/${idProduct}`;
    return this.http.get<InterfaceDetails>(urlEndPoint);
  }

  public getCategories():Observable<InterfaceCategories[]>{
    const urlEndPoint: string = "http://localhost:3002/categories";
    return this.http.get<InterfaceCategories[]>(urlEndPoint);
  }

}
