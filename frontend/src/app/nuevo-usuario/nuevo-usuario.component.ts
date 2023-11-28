import { Component } from '@angular/core';
import { Usuario } from '../usuario/cliente.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {

  usuario: Usuario = new Usuario();

  usuarioForm: FormGroup;

  constructor(
    private serviceService: ServiceService, 
    private fb: FormBuilder,
    private router: Router
    ) {
    this.usuarioForm = this.fb.group({
      dni: ['', Validators.required],
      apellidos: ['', Validators.required],
      clave: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      direccion: [''],
      estado: [''],
      nombre: ['', Validators.required],
      telefono: [''],
  })
}

  onSubmit() {
    this.usuario = { ...this.usuario, ...this.usuarioForm.value };

    this.serviceService.crearUsuario(this.usuario).subscribe(
          response => {
              console.log('Usuario creado con éxito:', response);
              this.router.navigate(['/login']);
          },
          error => {
              console.error('Error al crear usuario:', error);
          }
      );
  }
}
