import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario/cliente.model';
import { Rol } from './rol/rol.model';
import { HistorialCompra } from './historialCompra/historialCompra';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'http://localhost:8080/api';

    constructor(private http: HttpClient) {}

    crearUsuario(cliente: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this.apiUrl +'/cliente', cliente);
    }

    getRol(idRol: Number): Observable<Rol> {
        return this.http.get<Rol>(this.apiUrl +'/rol/'+ idRol);
    }

    getAllRol(): Observable<Rol[]> {
      return this.http.get<Rol[]>(this.apiUrl +'/rol');
    }

    getAllClientes(): Observable<Usuario []> {
      return this.http.get<Usuario[]>(this.apiUrl +'/cliente');
    }

    iniciarSesion(cliente: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this.apiUrl +'/login', cliente);
    }

    getHistorialCompras(clienteId: Number | undefined): Observable<HistorialCompra[]> {
      return this.http.get<HistorialCompra[]>(this.apiUrl +'/historialcompra/'+ clienteId);
    }
}
