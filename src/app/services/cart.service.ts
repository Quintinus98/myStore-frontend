import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList: Product[] = [];

  constructor() { }

  getCartList (): Product[] {
    return this.cartList;
  }

  updateCart (cartId: number, quantity: number): Product[] {
    this.cartList.map(cart => {
      if(cart.id === cartId){
        cart['quantity'] = quantity;
      }
    })
    return this.cartList;
  }

  addToCart (cartItem: Product): Product[] {
    const Item = this.cartList.filter(item => cartItem.id === item.id)
    if (Item.length === 0){
      this.cartList.unshift(cartItem);
      alert('Added to cart!')}
    else {
      this.cartList = this.updateCart(cartItem.id, cartItem.quantity);
      alert('Updated Item in cart!')
    }
    return this.cartList
  }

  removeFromCart (cartItem: Product): Product[] {
    this.cartList = this.cartList.filter(item => item !== cartItem)
    return this.cartList
  }
}
