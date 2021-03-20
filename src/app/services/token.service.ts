import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
   })
export class TokenService{

    constructor(){}
    
    getUserAuthenticationToken():string{
       return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiYnJ1bm8iLCJpYXQiOjE2MTYyMDI1MjAsImV4cCI6MTYxNjIyMDUyMH0.JsyeMTW6k08WCjf6C2GqkoD_pHBn6vZTRocdeekQF8M";
    }
}