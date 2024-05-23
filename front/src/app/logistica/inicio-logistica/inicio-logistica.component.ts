import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ConsultarComponent } from './consultar/consultar.component';

@Component({
  selector: 'app-inicio-logistica',
  standalone: true,
  imports: [MatTabsModule, ConsultarComponent],
  templateUrl: './inicio-logistica.component.html',
  styleUrl: './inicio-logistica.component.css'
})
export class InicioLogisticaComponent {

}
