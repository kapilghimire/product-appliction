import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


import { Customer } from '../modals/customer';



@Injectable({
  providedIn: 'root',
 })
 // Use 'API_URL' from environment.ts
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  // Function to get User's account details using email with JWT authentication token
  // and error handling using erro-handler.ts
  getAccountDetails(email: string): Observable<Customer> {
   return  this.httpClient.get<Customer>("http://localhost:8761/customers?"+email);
    
  }

  // Function to update or create new User's account details with JWT authentication token
  // and error handling using erro-handler.ts
  updateAccountDetails(payload: Customer): Observable<Customer> {

    return null;
  }

  // Function to update or create new User's account details with JWT authentication token
  // and error handling using erro-handler.ts
  addAccountDetails(payload: Customer): Observable<any> {

    return null;
  }
}
