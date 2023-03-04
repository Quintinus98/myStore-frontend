export class Product {
    id: number;
    name: string;
    price: number;
    url: string;
    quantity: number;
    description: string;

    constructor() {
        this.id = 1;
        this.name = "";
        this.price = 0;
        this.url = "";
        this.quantity = 1;
        this.description = ""
    }
}

export type Form = {
    fullname: string;
    address: string;
    card: string;
  }

export interface Dict {
    [key: number]: number
}

export class User {
    fullname: string;
    price: number;

    constructor () {
        this.fullname = "";
        this.price = 0;
    }
}