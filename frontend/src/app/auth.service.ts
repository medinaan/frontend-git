import { Injectable } from '@angular/core';
import { Usuario } from './usuario/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  guardarClienteEnSesion(cliente: Usuario): void {
    const clienteString = JSON.stringify(cliente);
    sessionStorage.setItem('cliente', clienteString);
  }

  // Recuperar un objeto Cliente del sessionStorage
  obtenerClienteDeSesion(): Usuario | null {
    const clienteString = sessionStorage.getItem('cliente');
    return clienteString ? JSON.parse(clienteString) : null;
  }

  // Eliminar el objeto Cliente del sessionStorage
  eliminarClienteDeSesion(): void {
    sessionStorage.removeItem('cliente');
  }

  getUsuarioLogueado(): boolean {
    // Comprobar si el usuario está en sesión
    return !!sessionStorage.getItem('cliente');
  }

  constructor() { }
}
