import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { envTesting } from '../enviroments/envTesting';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getDecodedToken(token: string): any {
    return new JwtHelperService().decodeToken(token);
  }
}
