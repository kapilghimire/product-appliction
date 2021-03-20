import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
// Use 'API_URL' from environment.ts
export class LoginRegisterService {
  baseUrl=environment.API_URL;
  constructor(private http:HttpClient) {}

  // Function to send login data to the backend
  // and error handling using erro-handler.ts
  login(payload: object): Observable<any> {
return this.http.post(this.baseUrl+'/auth/login',payload);
   // return of({"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"});
  }

  // Function to send register data to the backend
  // and error handling using erro-handler.ts
  register(payload: object): Observable<any> {

    return null;
  }
}
