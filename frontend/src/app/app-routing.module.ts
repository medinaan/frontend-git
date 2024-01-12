import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { HistorialComprasComponent } from './historial-compras/historial-compras.component';

const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'login', component: InicioSesionComponent },
  { path: 'newUser', component: NuevoUsuarioComponent },
  { path: 'historialCompras', component: HistorialComprasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
