import { Injectable } from '@angular/core';
import { User } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userList: User = new User;

  getUser (): User {
    return this.userList;
  }

  addUser (fullname: string, price: number): User {
    const newUser: User = {fullname, price}
    this.userList = newUser;
    return this.userList
  }

}
