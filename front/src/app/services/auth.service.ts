import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioAuth } from '../models/usuario.auth/usuario.auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3003/api/auth';



  constructor(private httpClient : HttpClient) { }

  // Metodo para autenticar usuario
  authenticate(user: UsuarioAuth){
    return this.httpClient.post<any>(`${this.baseUrl}`,user);
  }

    // Metodo para validar token
    validateToken(req : any, res : any, next : any){
      return this.httpClient.get<any>(`${this.baseUrl}/validate`);
    }

}
