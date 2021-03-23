import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/modals/customer';

import { Order } from 'src/app/modals/order';
import { OrderService } from 'src/app/services/order.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
// Class to display account Details
export class AccountComponent implements OnInit {
  user: Customer = {};
  orders: Order[];
  isLoggedIn: boolean=false;

  constructor(
    private orderService: OrderService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.getUserDetails();
    this.getOrders();
    this.loggedInCheck();
  }

  // Function to get details of user from sessionStorage item 'user'
  getUserDetails() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  // Function to update changes made by user to backend
  update() {
    debugger;
    sessionStorage.setItem('user', JSON.stringify(this.user));
    this.accountService.updateAccountDetails(this.user).subscribe();
  }

  // Function to get all orders of the user from backend
  getOrders() {
    debugger;
    this.orderService.getOrdersByCustomer(this.user.id).subscribe((data) => {
      this.orders = data;
    });
  }
  loggedInCheck() {
    debugger;
    if (sessionStorage.getItem('token') !== null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}
