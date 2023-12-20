import { Rol } from "../rol/rol.model";

// usuario.model.ts
export class Usuario {
    id!: number;
    dni!: string;
    apellidos!: string;
    clave!: string;
    correo!: string;
    direccion!: string;
    estado!: string;
    nombre!: string;
    telefono!: string;
    rol!: Rol;
  
    constructor(){}
  }
  