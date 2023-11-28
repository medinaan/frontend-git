import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'http://localhost:8080/api/cliente';

    constructor(private http: HttpClient) {}

    crearUsuario(cliente: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this.apiUrl, cliente);
    }
}
