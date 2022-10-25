import { Component, OnInit } from '@angular/core';
import { dataEspaciado } from 'src/app/data';

@Component({
	selector: 'app-espaciado',
	templateUrl: './espaciado.component.html',
	styleUrls: ['./espaciado.component.scss']
})
export class EspaciadoComponent implements OnInit {
    espaciado = dataEspaciado;
	constructor() { }

	ngOnInit(): void {
	}

}
