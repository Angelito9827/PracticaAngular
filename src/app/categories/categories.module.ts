import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
  
    ProductListComponent,
       ProductCardComponent,
       ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class CategoriesModule { }
