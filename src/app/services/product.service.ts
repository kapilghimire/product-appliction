import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../modals/product';

@Injectable({
  providedIn: 'root',
})
// Use 'API_URL' from environment.ts
export class ProductService {
  constructor(private http: HttpClient) {}

  // Function to get all products available with JWT authentication token
  // and error handling using erro-handler.ts
  getAllProducts(): Observable<Product[]> {

    return this.http.get<Product[]>("http://localhost:8761/products")
  }

  // Function to get all products of particular category with JWT authentication token
  // and error handling using erro-handler.ts
  getProductsByCategory(payload: string): Observable<Product[]> {

    return null;
  }
}
