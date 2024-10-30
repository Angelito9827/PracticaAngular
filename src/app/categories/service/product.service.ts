import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceProduct } from '../components/models/interaface-product.model';
import { InterfaceCategories } from '../components/models/interface-categories.model';

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

  public getCategories():Observable<InterfaceCategories[]>{
    const urlEndPoint: string = "http://localhost:3002/categories";
    return this.http.get<InterfaceCategories[]>(urlEndPoint);
  }

}
