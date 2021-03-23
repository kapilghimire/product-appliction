import { Order } from './../modals/order';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + sessionStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root',
})
// Use 'API_URL' from environment.ts
export class OrderService {
  baseUrl=environment.API_URL;
  constructor(private http:HttpClient) {}

  // Function to create a new Order with JWT authentication token
  // and error handling using erro-handler.ts
  addOrders(payload: Order): Observable<any> {

    return null;
  }

  // Function to get all orders of a user using user id with JWT authentication token
  // and error handling using erro-handler.ts
  getOrdersByCustomer(payload: string): Observable<Order[]> {

return this.http.get<Order[]>(this.baseUrl + '/orders?'+'customerId='+payload,httpOptions);
    // var c= this.http.get<Order[]>(this.baseUrl+"/orders");
  }
}
