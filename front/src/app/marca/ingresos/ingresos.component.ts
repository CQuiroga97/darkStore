import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { VerIngresosComponent } from "./ver-ingresos/ver-ingresos.component";
import { IngresarComponent } from "./ingresar/ingresar.component";

@Component({
    selector: 'app-ingresos',
    standalone: true,
    templateUrl: './ingresos.component.html',
    styleUrl: './ingresos.component.css',
    imports: [MatTabsModule, CommonModule, VerIngresosComponent, IngresarComponent]
})
export class IngresosComponent {

}
