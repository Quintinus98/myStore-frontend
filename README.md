# MyStoreFrontend

MyStore is Angular application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Project Features

This application reflects the same user experience as that of a real-world e-commerce website, including a(n):

- **Products page**: Which displays the available products for the user to choose and add to their cart (in various quantities).

- **Product details page**: Which displays more information about any particular product.

- **Shopping cart**: Which includes the products that the user has added to their cart.

- **Checkout form**: Which collects information about the user (e.g., name, address, payment details, etc.)

- **Order confirmation page**: Which shows the outcome after the user completes the checkout process (i.e., submits the checkout form)

- **Navbar**: Shows the Products and Cart links.

## Routing
  - path: **""** - Products page
  - path: **"product/:id"** - Product Details page
  - path: **"cart"** - Cart and Checkout page
  - path: **"congrats"** - Order Confirmation page
  - path: **"\**"** - Wild card (Page Not found)


## Demo

![MyStoreFrontend](shoppingflow.gif)


## Models

Some Models used includes:
- Product
- Form
- Dict
- User
