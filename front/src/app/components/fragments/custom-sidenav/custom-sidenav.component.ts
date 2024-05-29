import { CommonModule } from '@angular/common';
import { Component, Input, Signal, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { Usuario } from '../../../models/usuario/usuario';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  onClick?: () => void;
  activated: boolean;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {
  user: Usuario = new Usuario();
  sideNavCollapsed = signal(false);
  menuItems = signal<MenuItem[]>([]);
  @Input() set collapsed(value: boolean) {
    this.sideNavCollapsed.set(value);
  }



  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');

  constructor(private router: Router) { }

  onClickLogout() {
    localStorage.removeItem('token');
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('usuario') as string);
    if (this.user.rol == 0) {
      this.menuItems.set([
        { icon: 'inventory_2', label: 'Inventario', route: '/darkstore/inventario', activated: false, },
        { icon: 'shelves', label: 'Pedidos', route: '/darkstore/pedidos', activated: false, },
        { icon: 'local_shipping', label: 'Despachos', route: '/darkstore/despachos', activated: false, },
        { icon: 'content_paste', label: 'Reportes', route: '/darkstore/reportes', activated: false, },
        { icon: 'person_add', label: 'Marcas', route: '/darkstore/marcas', activated: false, },
        { icon: 'logout', label: 'Cerrar sesión', route: '', onClick: () => this.onClickLogout(), activated: false, }
      ]);
    } else if (this.user.rol == 1) {
      this.menuItems.set([
        { icon: 'inventory_2', label: 'Inventario', route: '/darkstore/inventario', activated: false, },
        { icon: 'shelves', label: 'Pedidos', route: '/darkstore/pedidos', activated: false, },
        { icon: 'local_shipping', label: 'Despachos', route: '/darkstore/despachos', activated: false, },
        { icon: 'content_paste', label: 'Reportes', route: '/darkstore/reportes', activated: false,},
        { icon: 'person_add', label: 'Marcas', route: '/darkstore/marcas', activated: false,},
        { icon: 'logout', label: 'Cerrar sesión', route: '', onClick: () => this.onClickLogout(), activated: false, }
      ]);
    } else if (this.user.rol == 2) {
      this.menuItems.set([
        { icon: 'local_shipping', label: 'Ingresos', route: '/darkstore/ingresos', activated: false, },
        { icon: 'logout', label: 'Cerrar sesión', route: '', onClick: () => this.onClickLogout(), activated: false, }
      ]);
    }
  }
}



