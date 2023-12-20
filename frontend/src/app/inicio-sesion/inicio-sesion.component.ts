import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Usuario } from '../usuario/cliente.model';
import { AppComponent } from '../app.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
  usuario: Usuario = new Usuario();

  usuarioForm: FormGroup;

  constructor(
    private serviceService: ServiceService, 
    private authService: AuthService, 
    private fb: FormBuilder,
    private router: Router
    ) {
    this.usuarioForm = this.fb.group({
      clave: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]
  })
}

  onSubmit() {
    this.usuario = { ...this.usuario, ...this.usuarioForm.value };

    this.serviceService.iniciarSesion(this.usuario).subscribe(
          response => {
              console.log('Usuario logeado con éxito:', response);
              this.authService.guardarClienteEnSesion(response);
              this.router.navigate(['/']);
          },
          error => {
              console.error('Error al logear el usuario:', error);
          }
      );
  }
}
