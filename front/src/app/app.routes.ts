import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { authGuard } from './guards/auth.guard';

import { SidenavComponent } from './components/fragments/sidenav/sidenav.component';

import { InicioLogisticaComponent } from './logistica/inicio-logistica/inicio-logistica.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, canActivate: [authGuard]},
  { path: 'sidenav', component: SidenavComponent},
  { path: 'darkstore/inicio', component: InicioLogisticaComponent, title: "Logistica | Inicio"},

];
