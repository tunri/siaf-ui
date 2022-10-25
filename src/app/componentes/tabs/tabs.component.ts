import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

   active = 1;

	tabs = `   // Regular
   <ul ngbNav #nav="ngbNav" [(activeId)]="active" class="nav-tabs d-flex flex-nowrap">
      <li [ngbNavItem]="1">
         <a ngbNavLink class="px-3" ngbTooltip="Detalles del documento" placement="bottom">
            <span class="feather icon-file-text icon-md"></span>
            <span class="ms-1">Detalles</span>
         </a>
         <ng-template ngbNavContent>Detalles del documento</ng-template>
      </li>
      <li [ngbNavItem]="2">
         <a ngbNavLink class="px-3" ngbTooltip="Modificaciones del documento" placement="bottom">
            <span class="feather icon-file-text icon-md"></span>
            <span class="ms-1">Modificaciones</span>
         </a>
         <ng-template ngbNavContent>Modificaciones del documento</ng-template>
      </li>
      <li [ngbNavItem]="3" [disabled]="true">
         <a ngbNavLink class="px-3" ngbTooltip="Actividad del documento" placement="bottom">
            <span class="feather icon-file-text icon-md"></span>
            <span class="ms-1">Actividad</span>
         </a>
         <ng-template ngbNavContent>Actividad del documento</ng-template>
      </li>
   </ul>
   <div class="my-3" [ngbNavOutlet]="nav"></div>`;
}
