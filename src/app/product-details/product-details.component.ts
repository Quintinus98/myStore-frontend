import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  product = new Product;
  quantity: string = "1";
  count: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  id!: number;
  
  constructor (
    private service: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    })

    this.service.getProducts().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].id == this.id) {
          this.product = res[i];
          break;
        }
      }
    });
  }

  updateProduct(val: string) {
    this.quantity = val;
  }

  addToCart(cartItem: Product): void {
    cartItem['quantity'] = parseInt(this.quantity);
    this.cartService.addToCart(cartItem);
  }

  
}