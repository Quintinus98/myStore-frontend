import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product = new Product;
  id!: number;
  quantity: string = "1";
  
  constructor (
    private service: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
  this.route.params.subscribe((params: Params) => {
    this.id = params['id']
  })}

  
}