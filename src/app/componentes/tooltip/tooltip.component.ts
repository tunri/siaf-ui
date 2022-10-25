import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tooltip',
	templateUrl: './tooltip.component.html',
	styleUrls: ['./tooltip.component.scss'],
   host: { 'class': 'd-block' }
})
export class TooltipComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}
	tooltip = `   // Regular
   <button type="button" class="btn btn-icon btn-outline-light me-2" placement="top" ngbTooltip="Filtros">
      <span class="feather icon-filter"></span>
   </button>
   <button type="button" class="btn btn-icon btn-outline-secondary me-2" placement="right" ngbTooltip="Más opciones">
      <span class="feather icon-more-vertical"></span>
   </button>
   <button type="button" class="btn btn-icon btn-lg btn-primary me-2" placement="bottom" ngbTooltip="Crear documento">
      <span class="feather icon-plus"></span>
   </button>
   <button type="button" class="btn btn-outline-secondary me-2" placement="left" ngbTooltip="Tooltip izquierda">
      Tooltip izquierda
   </button>`;

}
