import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-labels',
	templateUrl: './labels.component.html',
	styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}
	labels = `   // Pendiente
   <span class="labels labels-pendiente">
      <span class="labels_circle"></span>
      <span class="text-capitalize">Registrado</span>
   </span>
   // Verificado
   <span class="labels labels-verificado">
      <span class="labels_circle"></span>
      <span class="text-capitalize">Verificado</span>
   </span>
   // Aprobado
   <span class="labels labels-aprobado">
      <span class="labels_circle"></span>
      <span class="text-capitalize">Aprobado</span>
   </span>
   // Rechazado
   <span class="labels labels-rechazado">
      <span class="labels_circle"></span>
      <span class="text-capitalize">Rechazado</span>
   </span>
   // Descartado
   <span class="labels labels-descartado">
      <span class="labels_circle"></span>
      <span class="text-capitalize">Descartado</span>
   </span>
   // Enviado OPP
   <span class="labels labels-enviadoopp">
      <span class="labels_circle"></span>
      <span class="text-capitalize">Enviado opp</span>
   </span>
   // Activo
   <span class="labels labels-activo">
      <span class="labels_circle"></span>
      <span class="text-capitalize">Activo</span>
   </span>
   // Inactivo
   <span class="labels labels-inactivo">
      <span class="labels_circle"></span>
      <span class="text-capitalize">Inactivo</span>
   </span>`;
    labelsCircle = `   // Pendiente
   <span class="labels labels-pendiente estado-circulo" placement="left" ngbTooltip="Pendiente">P</span>
      // Verificado
   <span class="labels labels-verificado estado-circulo" placement="left" ngbTooltip="Verificado">V</span>
      // Aprobado
   <span class="labels labels-aprobado estado-circulo" placement="left" ngbTooltip="Aprobado">A</span>
      // Rechazado
   <span class="labels labels-rechazado estado-circulo" placement="left" ngbTooltip="Rechazado">R</span>
      // Descartado
   <span class="labels labels-descartado estado-circulo" placement="left" ngbTooltip="Descartado">D</span>
      // Enviado OPP
   <span class="labels labels-enviadoopp estado-circulo" placement="left" ngbTooltip="Enviado opp">E</span>
      // Activo
   <span class="labels labels-activo estado-circulo" placement="left" ngbTooltip="Activo">A</span>
      // Inactivo
   <span class="labels labels-inactivo estado-circulo" placement="left" ngbTooltip="Inactivo">I</span>`;

}
