import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CarouselComponent } from './home/carousel/carousel.component';
import { BannerComponent } from './home/banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShopByComponent } from './products/components/shop-by/shop-by.component';
import { ProductsModule } from './products/products.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    BannerComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopByComponent,
    ProductsModule
],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
