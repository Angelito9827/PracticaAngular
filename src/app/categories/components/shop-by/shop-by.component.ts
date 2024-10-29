import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop-by',
  templateUrl: './shop-by.component.html',
  styleUrl: './shop-by.component.scss',
  standalone: true, 
  imports:[CommonModule, RouterModule]
})
export class ShopByComponent {

}
