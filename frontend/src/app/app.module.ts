import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HistorialCompraComponent } from './historial-compra/historial-compra.component';
=======
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { HistorialComprasComponent } from './historial-compras/historial-compras.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
>>>>>>> develop

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    InicioSesionComponent,
    NuevoUsuarioComponent,
<<<<<<< HEAD
    HistorialCompraComponent
=======
    MenuUsuarioComponent,    
    ListadoProductosComponent,
    HistorialComprasComponent
>>>>>>> develop
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
