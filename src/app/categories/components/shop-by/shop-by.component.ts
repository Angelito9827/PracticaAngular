import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InterfaceCategories } from '../models/interface-categories.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-shop-by',
  templateUrl: './shop-by.component.html',
  styleUrl: './shop-by.component.scss',
  standalone: true, 
  imports:[CommonModule, RouterModule]
})
export class ShopByComponent {
  categories: InterfaceCategories[] = [];

  constructor(
    private service: ProductService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {
    this.service.getCategories().subscribe(
      (data: InterfaceCategories[]) => {
        this.categories = data;
      }
    );
  }
}
