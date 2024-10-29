import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceProduct } from '../components/models/interaface-product.model';

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

}
