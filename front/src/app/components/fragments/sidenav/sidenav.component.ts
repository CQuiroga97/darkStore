import { Component, computed, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CustomSidenavComponent } from "../custom-sidenav/custom-sidenav.component";
import { MatButtonModule } from '@angular/material/button';
import { Usuario } from '../../../models/usuario/usuario';
@Component({
    selector: 'app-sidenav',
    standalone: true,
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.css',
    imports: [MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule, RouterModule, CustomSidenavComponent, MatButtonModule]
})
export class SidenavComponent {

  collapsed = signal(false);

  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');
  user : Usuario;

  constructor() {}
}
