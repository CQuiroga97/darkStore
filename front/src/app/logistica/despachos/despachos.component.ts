import { Component, ViewChild } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { MatTabsModule } from '@angular/material/tabs';
import { ConsultarComponent } from '../inicio-logistica/consultar/consultar.component';
import { AlmacenarInventarioComponent } from '../inicio-logistica/almacenar-inventario/almacenar-inventario.component';
import { NuevoDespachoComponent } from './nuevo-despacho/nuevo-despacho.component';
import { NgFor } from '@angular/common';
import { VerDespachosComponent } from './ver-despachos/ver-despachos.component';

@Component({
  selector: 'app-despachos',
  standalone: true,
  imports: [MatTabsModule, ConsultarComponent, AlmacenarInventarioComponent, NuevoDespachoComponent, NgFor, VerDespachosComponent],
  templateUrl: './despachos.component.html',
  styleUrl: './despachos.component.css'
})
export class DespachosComponent {
  @ViewChild(VerDespachosComponent) verDespachosComponent: VerDespachosComponent;
  onTabChanged(ev:any){
    if(ev.index == 1)
        this.verDespachosComponent.buscar()
  }
}
