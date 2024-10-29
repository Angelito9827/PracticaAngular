import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterfaceProduct } from '../models/interaface-product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  idCategory?: number;
  products: InterfaceProduct[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.idCategory = Number(params.get('idCategory')) ?? 0;
    });
    this.getProducts();
  }

  private getProducts() {
    this.service.getProducts().subscribe(
      (data: InterfaceProduct[]) => {
        this.products = data;
      }
    );
  }
  
}
