import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}
	buttonSize = `   // Botón pequeño
   <button type="button" class="btn btn-sm btn-primary">Pequeño</button>
   // Botón regular
   <button type="button" class="btn btn-primary">Regular</button>
   // Botón grande
   <button type="button" class="btn btn-lg btn-primary">Grande</button>`;
	buttonStyle = `   // Botón primario
   <button type="button" class="btn btn-primary">Primario</button>
   // Botón secundario
   <button type="button" class="btn btn-secondary">Secundario</button>
   // Botón primario línea
   <button type="button" class="btn btn-outline-primary">Primario línea</button>
   // Botón secundario línea
   <button type="button" class="btn btn-outline-secondary">Secundario línea</button>
   // Botón suave
   <button type="button" class="btn btn-outline-light">Suave</button>`;
	buttonIcon = `   // Botón grabar
   <button type="button" class="btn btn-primary">
      <span class="feather icon-save me-1"></span>
      Grabar
   </button>
   // Botón grabando
   <button type="button" disabled="true" class="btn btn-primary">
      <div class="spinner-border spinner-border-sm me-2" role="status"></div>
      Grabando...
   </button>
   // Botón editar
   <button type="button" class="btn btn-outline-secondary">
      <span class="feather icon-edit-2 me-1"></span>
      Editar
   </button>
   // Botón cancelar
   <button type="button" class="btn btn-secondary">
      <span class="feather icon-x me-1"></span>
      Cancelar
   </button>
   // Botón agregar 
   <button type="button" class="btn btn-outline-primary">
      <span class="feather icon-plus me-1"></span>
      Agregar
   </button>`
	onlyIcon = `   // Botón paginación left
   <button type="button" class="btn btn-icon btn-sm btn-outline-light">
      <span class="feather icon-chevron-left"></span>
   </button>
   // Botón paginación right
   <button type="button" class="btn btn-icon btn-sm btn-outline-light">
      <span class="feather icon-chevron-right"></span>
   </button>
   // Botón agregar
   <button type="button" class="btn btn-icon btn-lg btn-primary">
      <span class="feather icon-plus"></span>
   </button>
   // Botón filtrar
   <button type="button" class="btn btn-icon btn-lg btn-outline-light">
      <span class="feather icon-filter"></span>
   </button>
   // Botón eliminar
   <button type="button" class="btn btn-icon btn-secondary">
	  <span class="feather icon-trash-2"></span>
   </button>`;
}
