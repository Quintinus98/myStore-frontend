import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dict, Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem: Product = new Product;

  count: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  quantity: number = 1;

  @Output() removeCartItem: EventEmitter<Product> = new EventEmitter();

  constructor(
    private cartService: CartService
  ){}

  ngOnInit(): void {
    this.quantity = this.cartItem.quantity;
  }

  watchAmount(val: number, productId: number): void {
    this.quantity = val;
    if (this.quantity <= 0) {
      this.removeItem(this.cartItem);
      alert('Product removed from cart!')
    }
    else {
      this.cartService.updateCart(productId, val)
    }
  }

  removeItem(product: Product): void {
    this.removeCartItem.emit(product);
  }

}
