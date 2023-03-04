import { Component, Input } from '@angular/core';
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
  quantityList: Dict = {};
  count: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  sum: number = 0;

  constructor (
    private cartService: CartService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList();
    this.cartList.map(cartItem => {
      this.quantityList[cartItem.id] = cartItem.quantity
    })
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

  getTotal(): number {
    let sum: number = 0;
    this.cartList.map(item => {
      sum += item.quantity * item.price
    })
    this.sum = sum;
    return parseFloat(this.sum.toFixed(2))
  }

  watchAmount(val: number, productId: number): void {
    this.cartList.map(cart => {
      if (cart.id === productId) this.quantityList[productId] = val
    })
    
    if (this.quantityList[productId] <= 0) {
      const product = this.cartList.filter(cartItem => cartItem.id === productId)[0]
      this.cartList = this.cartService.removeFromCart(product);
      this.getTotal();
      alert('Product removed from cart!')
    }
    else {
      this.cartList = this.cartService.updateCart(productId, val)
      this.getTotal();
    }

    
  }
}
