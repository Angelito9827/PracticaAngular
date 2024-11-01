import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterfaceProductList } from '../models/interface-product-list.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  idProduct?: number;
  products: InterfaceProductList[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.idProduct = Number(params.get('idCategory')) ?? 0;
    });
    this.getProducts();
  }

  private getProducts() {
    this.service.getProducts().subscribe(
      (data: InterfaceProductList[]) => {
        this.products = data;
      }
    );
  }
  
}
