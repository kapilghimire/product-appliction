import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, pipe, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorHandler } from 'src/app/error-handler';


import { Customer } from '../modals/customer';
import {catchError, map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + sessionStorage.getItem('token')
  })
};
@Injectable({
  providedIn: 'root',
 })
 // Use 'API_URL' from environment.ts
export class AccountService {
  baseUrl=environment.API_URL;
  constructor(private httpClient: HttpClient,private errorHandler:ErrorHandler) {}

  // Function to get User's account details using email with JWT authentication token
  // and error handling using erro-handler.ts
  getAccountDetails(email: string): Observable<Customer> {
  //  return  this.httpClient.get<Customer>("http://localhost:8761/customers?"+email);
  return  this.httpClient.get<Customer>(this.baseUrl+'/customers?'+email)
  
    
  }

  // Function to update or create new User's account details with JWT authentication token
  // and error handling using erro-handler.ts
  updateAccountDetails(payload: Customer): Observable<Customer> {
    http://localhost:8761/customers/:id    
    return this.httpClient.post<Customer>(this.baseUrl + '/customers/'+payload.id,payload,httpOptions);
    // return this.httpClient.post(this.baseUrl+'/update',payload)
  //   .pipe(
  //     catchError((err) => {
  //       debugger;
  //       console.log('error caught in service')
  //       console.error(err);
  // this.errorHandler.handleError(err);
  //       //Handle the error here
  
  //       return throwError(err); 
  //     })
  //   )
  }

  // Function to update or create new User's account details with JWT authentication token
  // and error handling using erro-handler.ts
  addAccountDetails(payload: Customer): Observable<any> {

    return null;
  }
}
