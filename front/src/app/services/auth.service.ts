import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioAuth } from '../models/usuario.auth/usuario.auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/auth';



  constructor(private httpClient : HttpClient) { }

  // Metodo para autenticar usuario
  authenticate(user: UsuarioAuth){
    return this.httpClient.post<any>(`${this.baseUrl}/login`,user);
  }

}