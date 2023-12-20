import { Component } from '@angular/core';
import { Usuario } from './usuario/cliente.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private authService: AuthService) {}

  get usuarioLogueado(): boolean {
    return this.authService.getUsuarioLogueado();
  }
}
