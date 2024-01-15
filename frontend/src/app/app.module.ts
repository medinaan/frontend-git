import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    InicioSesionComponent,
    NuevoUsuarioComponent,
    MenuUsuarioComponent,
    ListadoProductosComponent
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
