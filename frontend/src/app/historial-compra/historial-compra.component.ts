import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { HistorialCompra } from '../historialCompra/historialCompra';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-historial-compra',
  templateUrl: './historial-compra.component.html',
  styleUrl: './historial-compra.component.css'
})
export class HistorialCompraComponent {
  historialCompras: HistorialCompra[] = [];

  constructor(private serviceService: ServiceService,
    private authService: AuthService, ) { }

  ngOnInit() {
    const cliente = this.authService.obtenerClienteDeSesion();
    const userId = cliente?.id;

    // Luego, utiliza tu servicio para obtener el historial de compras del usuario
    this.serviceService.getHistorialCompras(userId)
      .subscribe((historial: HistorialCompra[]) => {
        this.historialCompras = historial;
      });
  }

}
