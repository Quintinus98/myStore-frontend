import { Component, Input } from '@angular/core';
import { Form, Product, Dict } from '../models/product';
import { CartService } from '../services/cart.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent {
  cartList: Product[] = [];
  quantityList: Dict = {};
  count: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  constructor (
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList();
    // for (let i = 0; i < this.cartList.length; i++) {
    //   const cart = this.cartList[i];
    //   this.quantityList[cart.id] = cart.quantity;
    // }

    this.cartList.map(cartItem => {
      this.quantityList[cartItem.id] = cartItem.quantity
    })
    console.log(this.quantityList);
    
  }

// You added congrats route here.
  onSubmit(form: Form) {
    console.log(form.card)
    this.router.navigate(['/congrats']);
  }

  getTotal(): number {
    let sum: number = 0;
    this.cartList.map(item => {
      sum += item.quantity * item.price
    })
    return parseFloat(sum.toFixed(2))
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
