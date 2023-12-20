import { Component } from '@angular/core';
import { Usuario } from '../usuario/cliente.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Rol } from '../rol/rol.model';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {

  usuario: Usuario = new Usuario();

  rol: Rol = new Rol();

  usuarioForm: FormGroup;

  roles: Rol[] = [];

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
      idRol: ['', Validators.required]
  })
}

ngOnInit() {
  this.serviceService.getAllRol().subscribe(
    roles => {
      this.roles = roles;
    },
    error => {
      console.error('Error al obtener roles:', error);
    }
  );
}

onSubmit() {
  const idRolSeleccionado = this.usuarioForm.value.idRol;
  this.usuarioForm.value.idRol = parseInt(this.usuarioForm.value.idRol);
  this.rol = this.roles.find(rol => rol.idRol === parseInt(idRolSeleccionado)) ?? new Rol();
  delete this.usuarioForm.value.idRol;

  this.usuario = { ...this.usuario, ...this.usuarioForm.value };

  if (this.rol) {
    this.usuario.rol = this.usuario.rol || {};
    
    this.usuario.rol = this.rol;
    }

  console.log(this.rol);
  console.log(this.roles);
  console.log(this.usuario);

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
