import { Component, OnInit } from '@angular/core';
import { dataColores } from 'src/app/data';

@Component({
	selector: 'app-colores',
	templateUrl: './colores.component.html',
	styleUrls: ['./colores.component.scss']
})
export class ColoresComponent implements OnInit {
	colores = dataColores;
	constructor() { }

	ngOnInit(): void {
	}

}
