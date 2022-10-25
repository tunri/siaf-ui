import { Component, OnInit } from '@angular/core';
import { dataTipografia } from 'src/app/data';

@Component({
	selector: 'app-tipografia',
	templateUrl: './tipografia.component.html',
	styleUrls: ['./tipografia.component.scss']
})
export class TipografiaComponent implements OnInit {
    tipografia = dataTipografia;
	constructor() { }

	ngOnInit(): void {
	}

}
