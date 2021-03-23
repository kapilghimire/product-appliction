import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../modals/product';

@Injectable({
  providedIn: 'root',
})
// Use 'API_URL' from environment.ts
export class ProductService {
  baseUrl=environment.API_URL;
  constructor(private http: HttpClient) {}

  // Function to get all products available with JWT authentication token
  // and error handling using erro-handler.ts
  getAllProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(this.baseUrl+"/products")
  }

  // Function to get all products of particular category with JWT authentication token
  // and error handling using erro-handler.ts
  getProductsByCategory(payload: string): Observable<Product[]> {

    return null;
  }
}
