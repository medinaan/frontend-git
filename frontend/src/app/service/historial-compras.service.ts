import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CestaCompra } from '../cestacompra/cestacompra.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialComprasService {

  private baseUrl = 'http://localhost:8080/api/cestacompra'

  constructor(private http: HttpClient) { }

  obtenerHistorialCompras(clienteId : number): Observable<CestaCompra[]>{
    return this.http.get<CestaCompra[]>(`${this.baseUrl}/${clienteId}`)
  }

}
