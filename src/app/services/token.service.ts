import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
   })
export class TokenService{

    constructor(){}
    
    getUserAuthenticationToken():string{
      return sessionStorage.getItem('token');
    }
}