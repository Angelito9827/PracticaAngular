import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceDetails } from '../../components/models/interface-details.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(
    private http: HttpClient
  ) { }

  public getDetailsProduct(idProduct: number): Observable<InterfaceDetails> {
    const urlEndPoint: string = `http://localhost:3002/products/${idProduct}`;
    return this.http.get<InterfaceDetails>(urlEndPoint);
  }
}
