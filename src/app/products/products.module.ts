import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { provideHttpClient } from '@angular/common/http';
import { BestSellerProductsComponent } from './components/best-seller-products/best-seller-products.component';


@NgModule({
  declarations: [
  
    ProductListComponent,
       ProductCardComponent,
       ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class ProductsModule { }
