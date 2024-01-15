import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';

const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'login', component: InicioSesionComponent },
  { path: 'newUser', component: NuevoUsuarioComponent },
  {path: 'menu-usuario', component:MenuUsuarioComponent},
  {path: 'listado-productos', component:ListadoProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
