import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product = new Product;
  quantity: string = "1";
  count: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  
  constructor (
    private cartService: CartService
  ) {}
  
  updateProduct(val: string){
    this.quantity = val;
  }
  
  addToCart(cartItem: Product): void {
    cartItem['quantity'] = parseInt(this.quantity);
    this.cartService.addToCart(cartItem);
  }

}