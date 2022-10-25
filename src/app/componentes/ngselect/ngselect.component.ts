import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ngselect',
	templateUrl: './ngselect.component.html',
	styleUrls: ['./ngselect.component.scss']
})
export class NgselectComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}
	seleccionado = 1;
	ListaEjemplo = [
		{ id: 1, name: 'Enero' },
		{ id: 2, name: 'Febrero' },
		{ id: 3, name: 'Marzo' },
		{ id: 4, name: 'Abril' },
		{ id: 5, name: 'Mayo' },
		{ id: 6, name: 'Junio' },
		{ id: 7, name: 'Julio' },
		{ id: 8, name: 'Agosto' }
	];
	regular = `   // Regular
   <div class="form-group">
      <label for="ejemplo">Regular</label>
      <ng-select class="text-uppercase" [items]="ListaEjemplo" bindLabel="name" bindValue="id" [(ngModel)]="seleccionado"
      [searchable]="false" [clearable]="false">
      </ng-select>
   </div>`;
    disabled = `   // Disabled
   <div class="form-group">
      <label for="ejemplo">Disabled</label>
      <ng-select class="text-uppercase" [items]="ListaEjemplo" bindLabel="name" bindValue="id" [(ngModel)]="seleccionado"
      [searchable]="false" [disabled]="true" [clearable]="false">
      </ng-select>
   </div>`;
}
