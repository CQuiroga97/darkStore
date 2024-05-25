import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { authGuard } from './guards/auth.guard';
<<<<<<< HEAD
=======
import { InicioLogisticaComponent } from './logistica/inicio-logistica/inicio-logistica.component';
import { PedidosComponent } from './logistica/pedidos/pedidos.component';
import { DespachosComponent } from './logistica/despachos/despachos.component';
>>>>>>> b2d5217c7ad7574a4b330004c29a9072efdf4df9

import { SidenavComponent } from './components/fragments/sidenav/sidenav.component';

import { InicioLogisticaComponent } from './logistica/inicio-logistica/inicio-logistica.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, canActivate: [authGuard]},
<<<<<<< HEAD
  { path: 'sidenav', component: SidenavComponent},
  { path: 'darkstore/inicio', component: InicioLogisticaComponent, title: "Logistica | Inicio"},

=======
  { path: 'darkstore/inventario', component: InicioLogisticaComponent, title: "Logistica | Inventario"},
  { path: 'darkstore/pedidos', component: PedidosComponent, title: "Logistica | Pedidos"},
  { path: 'darkstore/despachos', component: DespachosComponent, title: "Logistica | Despachos"},
>>>>>>> b2d5217c7ad7574a4b330004c29a9072efdf4df9
];
