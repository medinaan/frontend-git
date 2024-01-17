import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
<<<<<<< HEAD
import { HistorialCompraComponent } from './historial-compra/historial-compra.component';
=======
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { HistorialComprasComponent } from './historial-compras/historial-compras.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
>>>>>>> develop

const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'login', component: InicioSesionComponent },
  { path: 'newUser', component: NuevoUsuarioComponent },
<<<<<<< HEAD
  { path: 'historialCompra', component: HistorialCompraComponent },
=======
  {path: 'menu-usuario', component:MenuUsuarioComponent},
  { path: 'historialCompras', component: HistorialComprasComponent},
  {path: 'listado-productos', component:ListadoProductosComponent}
>>>>>>> develop
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
