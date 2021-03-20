import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { TokenService } from "../services/token.service";


@Injectable({
   providedIn: 'root'
 })
export class AuthInterceptor implements HttpInterceptor{
    constructor (){}


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       // Get the auth token from the service.
   // const authToken = this.tokenService.getUserAuthenticationToken();
     
     // tokent is null user is yet to be logged in redirect to login page
   //   if(authToken==null){
   //      this.router.navigate(['home'])
   //   }
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
   const   authToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiYnJ1bm8iLCJpYXQiOjE2MTYyMDI1MjAsImV4cCI6MTYxNjIyMDUyMH0.JsyeMTW6k08WCjf6C2GqkoD_pHBn6vZTRocdeekQF8M";
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
    }
}