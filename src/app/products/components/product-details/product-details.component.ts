import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterfaceProduct } from '../models/interface-product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  product?: InterfaceProduct;

  constructor(private route: ActivatedRoute, private service: ProductService) {}

  ngOnInit(): void {
    const idProduct = Number(this.route.snapshot.paramMap.get('idProduct'));
    this.service
      .getProductDetails(idProduct)
      .subscribe((data: InterfaceProduct) => {
        this.product = data;
      });
  }
}
