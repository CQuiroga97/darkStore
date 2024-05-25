import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ConsultarComponent } from './consultar/consultar.component';
import { AlmacenarInventarioComponent } from './almacenar-inventario/almacenar-inventario.component';

@Component({
  selector: 'app-inicio-logistica',
  standalone: true,
  imports: [MatTabsModule, ConsultarComponent, AlmacenarInventarioComponent],
  templateUrl: './inicio-logistica.component.html',
  styleUrl: './inicio-logistica.component.css'
})
export class InicioLogisticaComponent {

}
