import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-radio',
	templateUrl: './radio.component.html',
	styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}
	radio = `   // Radio
   <div class="form-check">
      <input type="radio" id="Ascendente" checked="true" name="radioExample" class="form-check-input">
      <label class="form-check-label" for="Ascendente">Ascendente</label>
   </div>
   <div class="form-check">
      <input type="radio" id="Descendente" name="radioExample" class="form-check-input">
      <label class="form-check-label" for="Descendente">Descendente</label>
   </div>`;
	radioInline = `   // Radio Inline
   <div class="form-check form-check-inline">
      <input type="radio" id="Ascendente2" checked="true" name="radioExample2" class="form-check-input">
      <label class="form-check-label" for="Ascendente2">Ascendente</label>
   </div>
   <div class="form-check form-check-inline">
      <input type="radio" id="Descendente2" name="radioExample2" class="form-check-input">
      <label class="form-check-label" for="Descendente2">Descendente</label>
   </div>`;
	checkbox = `   // Checkbox
   <div class="form-check">
      <input type="checkbox" class="form-check-input" id="meta1" checked="true">
      <label class="form-check-label" for="meta1">Meta 000001</label>
   </div>
   <div class="form-check">
      <input type="checkbox" class="form-check-input" id="meta2">
      <label class="form-check-label" for="meta2">Meta 000002</label>
   </div>`;
	checkboxInline = `   // Checkbox Inline
   <div class="form-check form-check-inline">
      <input type="checkbox" class="form-check-input" id="meta3" checked="true">
      <label class="form-check-label" for="meta1">Meta 000003</label>
   </div>
   <div class="form-check form-check-inline">
      <input type="checkbox" class="form-check-input" id="meta4">
      <label class="form-check-label" for="meta2">Meta 000004</label>
   </div>`;
	switch = `   // Switch
   <div class="form-check form-switch">
      <input type="checkbox" checked="true" class="form-check-input" id="certificaciones">
      <label class="form-check-label" for="certificaciones">Certificaciones</label>
   </div>
   <div class="form-check form-switch">
      <input type="checkbox" class="form-check-input" disabled id="compromiso">
      <label class="form-check-label" for="compromiso">Compromiso mensual</label>
   </div>`;

}
