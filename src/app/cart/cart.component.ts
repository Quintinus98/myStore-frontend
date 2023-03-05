import { Component, Output, EventEmitter } from '@angular/core';
import { Form, Product, Dict } from '../models/product';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent {
  cartList: Product[] = [];
  sum: number = 0;

  constructor (
    private cartService: CartService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList();
  }

// You added congrats route here.
  onSubmit(form: Form): void {
    if (this.sum === 0) {
      alert('Add a product!')
      this.router.navigate(['/'])
    } else {
      this.userService.addUser(form.fullname, this.sum)
      this.router.navigate(['/congrats']);
      this.cartService.removeAllCart();
    }
  }

  numericOnly(event: { key: string; }): boolean {    
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    return result;
  }

  getTotal(): number {
    let sum: number = 0;
    this.cartList.map(item => {
      sum += item.quantity * item.price
    })
    this.sum = sum;
    return parseFloat(this.sum.toFixed(2))
  }

  removeCartItem(product: Product):void {
    this.cartList = this.cartService.removeFromCart(product);
  }

}
