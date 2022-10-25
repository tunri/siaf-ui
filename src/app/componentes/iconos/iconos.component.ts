import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-iconos',
	templateUrl: './iconos.component.html',
	styleUrls: ['./iconos.component.scss']
})
export class IconosComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}
	regular = `   // Seleccionar icono
   <span class="feather icon-xxx"></span>`;
	icono = `   // Seleccionar icono
   <span class="box_icon box_icon_sm mb-3">
      <span class="feather icon-hard-drive icon-md"></span>
   </span>
   <span class="box_icon mb-3">
      <span class="feather icon-hard-drive icon-md"></span>
   </span>
   <span class="box_icon box_icon_lg mb-3">
      <span class="feather icon-hard-drive icon-lg"></span>
   </span>
   <span class="box_icon box_icon_xl mb-3">
      <span class="feather icon-hard-drive icon-lg"></span>
   </span>`;

}
