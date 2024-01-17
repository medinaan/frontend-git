import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistorialComprasService} from '../service/historial-compras.service';
import { Observable } from 'rxjs';
import { CestaCompra } from '../cestacompra/cestacompra.model';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrl: './historial-compras.component.css'
})
export class HistorialComprasComponent implements OnInit{
  historialCompras: Observable<CestaCompra[]> = new Observable<CestaCompra[]>();

  constructor(private historialComprasService: HistorialComprasService, private router: Router){ }

  ngOnInit(): void {
    const clienteActualString = sessionStorage.getItem('cliente');
    const clienteActual = clienteActualString ? JSON.parse(clienteActualString) : null;

    console.log(clienteActual);


    if(clienteActual){
      this.historialCompras = this.historialComprasService.obtenerHistorialCompras(clienteActual.idCliente);

    } else {

     console.error('No se encontro un cliente en sessionStorage. Redirigendo');
     this.router.navigate(['']);
    }  

  }

}
