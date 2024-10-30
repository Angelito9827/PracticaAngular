import { Injectable } from '@angular/core';
import { InterfaceBanner } from '../../models/interface-banner.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(
    private http: HttpClient
  ) { }

  public getBannerImages(): Observable<InterfaceBanner> {
    const urlEndPoint: string = "http://localhost:3002/banner";
    return this.http.get<InterfaceBanner>(urlEndPoint);
  }
}
