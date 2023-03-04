import { Component } from '@angular/core';
import { User } from '../models/product';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.css']
})
export class CongratsComponent {

  user: User = new User;

  constructor (
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  toProduct() {
    this.router.navigate(['/']);
  }
}
