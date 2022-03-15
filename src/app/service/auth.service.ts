import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated=true;

  constructor() { }

  isAuthenticated(): boolean{
    let authenticate = !localStorage.getItem('tokenauth');
    return authenticate;
  }
}
