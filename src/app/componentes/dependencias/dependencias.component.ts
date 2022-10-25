import { Component, OnInit } from '@angular/core';
import { dataDependencia } from 'src/app/data';

@Component({
    selector: 'app-dependencias',
    templateUrl: './dependencias.component.html',
    styleUrls: ['./dependencias.component.scss']
})
export class DependenciasComponent implements OnInit {

    constructor() { }
    dependencias = dataDependencia;
    ngOnInit(): void {

    }


}
