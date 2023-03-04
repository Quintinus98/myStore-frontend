import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CongratsComponent } from './congrats/congrats.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: "", component: ProductsComponent},
  {path: "cart", component: CartComponent},
  {path: "product/:id", component: ProductDetailsComponent},
  {path: "congrats", component: CongratsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
