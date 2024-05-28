import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ConsultarComponent } from './consultar/consultar.component';
import { AlmacenarInventarioComponent } from './almacenar-inventario/almacenar-inventario.component';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario/usuario';

@Component({
  selector: 'app-inicio-logistica',
  standalone: true,
  imports: [MatTabsModule, ConsultarComponent, AlmacenarInventarioComponent, CommonModule],
  templateUrl: './inicio-logistica.component.html',
  styleUrl: './inicio-logistica.component.css'
})
export class InicioLogisticaComponent {
  user: Usuario = new Usuario();

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('usuario') as string);
  }
}
