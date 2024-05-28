import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { authGuard } from './guards/auth.guard';
import { InicioLogisticaComponent } from './logistica/inicio-logistica/inicio-logistica.component';
import { PedidosComponent } from './logistica/pedidos/pedidos.component';
import { DespachosComponent } from './logistica/despachos/despachos.component';

import { SidenavComponent } from './components/fragments/sidenav/sidenav.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { MarcasComponent } from './logistica/marcas/marcas.component';
import { IngresosComponent } from './marca/ingresos/ingresos.component';
import { Usuario } from './models/usuario/usuario';

let user: Usuario = new Usuario();
user = JSON.parse(localStorage.getItem('usuario') as string);

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent, canActivate: [authGuard] },
  {
    path: 'darkstore', component: SidenavComponent, canActivate: [authGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'inventario'},
      { path: 'inventario', pathMatch: 'full', component: InicioLogisticaComponent, title: "Inicio" },
      { path: 'ingresos', pathMatch: 'full', component: IngresosComponent, title: user.nombre +" | Ingresos"},
      { path: 'marcas', component: MarcasComponent, title: "Logistica | Marcas"},
      { path: 'reportes', component: ReportesComponent, title: "Logistica | Reportes"},
      { path: 'pedidos', component: PedidosComponent, title: "Logistica | Pedidos" },
      { path: 'despachos', component: DespachosComponent, title: "Logistica | Despachos" }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];

