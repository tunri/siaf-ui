import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-datepicker',
	templateUrl: './datepicker.component.html',
	styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	model: NgbDateStruct;
	model2: NgbDateStruct;
	regular = `   // Regular
   <div class="form-group">
      <label for="ejemplo">Label</label>
      <input autocomplete="off" class="form-control form-icon calendar" (click)="d.toggle()" placeholder="yyyy-mm-dd" name="dp" [(ngModel)]="model" ngbDatepicker
      #d="ngbDatepicker">
   </div>`;
    minima = `   // Fecha minima
   <div class="form-group">
      <label for="ejemplo">Label</label>
      <input autocomplete="off" [minDate]="{year: 2021, month: 12, day: 10 }" class="form-control form-icon calendar" (click)="d2.toggle()"
      placeholder="yyyy-mm-dd" name="dp2" [(ngModel)]="model2" ngbDatepicker #d2="ngbDatepicker">
   </div>`;

}
