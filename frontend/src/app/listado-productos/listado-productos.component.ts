// listado-productos.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
  productos: any[] = [];
  campoActual: string = '';

  ngOnInit() {
    // Simula una llamada HTTP al backend para obtener los productos
    this.productos = [
      // ... (datos de ejemplo)
    ];
  }

  ordenarPor(campo: string) {
    // Implementa la lógica para ordenar los productos por el campo especificado
    // Puedes usar funciones de ordenamiento en TypeScript o Angular
    // Por ejemplo, this.productos.sort((a, b) => a[campo].localeCompare(b[campo]));
    this.campoActual = campo;
  }

  mostrarCampo(campo: string): boolean {
    return this.campoActual === campo;
  }
}
