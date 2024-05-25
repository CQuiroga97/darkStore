import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { authGuard } from './guards/auth.guard';
import { InicioLogisticaComponent } from './logistica/inicio-logistica/inicio-logistica.component';
import { PedidosComponent } from './logistica/pedidos/pedidos.component';
import { DespachosComponent } from './logistica/despachos/despachos.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, canActivate: [authGuard]},
  { path: 'darkstore/inventario', component: InicioLogisticaComponent, title: "Logistica | Inventario"},
  { path: 'darkstore/pedidos', component: PedidosComponent, title: "Logistica | Pedidos"},
  { path: 'darkstore/despachos', component: DespachosComponent, title: "Logistica | Despachos"},
];
