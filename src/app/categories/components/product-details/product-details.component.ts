import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterfaceDetails } from '../models/interface-details.model';
import { DetailsService } from '../../service/product-details-service/details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  product?: InterfaceDetails;

  constructor(private route: ActivatedRoute, private service: DetailsService) {}

  ngOnInit(): void {
    const idProduct = Number(this.route.snapshot.paramMap.get('idProduct'));
    this.service
      .getDetailsProduct(idProduct)
      .subscribe((data: InterfaceDetails) => {
        this.product = data;
      });
  }
}
