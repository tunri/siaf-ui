import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}
	alertFlotante = `   // Alert Success
   <div class="alert alert-flotante alert-success" role="alert">
      <span class="feather icon-check-circle"></span>
      <div class="w-100 mx-3 d-flex flex-column">
         <span class="label-large fw-bold">...</span>
         <span class="label-large siaf-grey-30">...</span>
      </div>
      <span class="feather icon-x ms-auto c-pointer"></span>
   </div>

   // Alert Error
   <div class="alert alert-flotante alert-danger" role="alert">
      <span class="feather icon-slash"></span>
      <div class="w-100 mx-3 d-flex flex-column">
         <span class="label-large fw-bold">...</span>
         <span class="label-large siaf-grey-30">...</span>
      </div>
      <span class="feather icon-x ms-auto c-pointer"></span>
   </div>

   // Alert Info
   <div class="alert alert-flotante alert-info" role="alert">
      <span class="feather icon-info"></span>
      <div class="w-100 mx-3 d-flex flex-column">
         <span class="label-large fw-bold">...</span>
         <span class="label-large siaf-grey-30">...</span>
      </div>
      <span class="feather icon-x ms-auto c-pointer"></span>
   </div>

   // Alert Warning
   <div class="alert alert-flotante alert-warning" role="alert">
      <span class="feather icon-alert-triangle"></span>
      <div class="w-100 mx-3 d-flex flex-column">
         <!-- <span class="label-large fw-bold">Título de alerta</span> -->
         <span class="label-large siaf-grey-30">Debe completar todos los campos requeridos.</span>
      </div>
      <span class="feather icon-x ms-auto c-pointer"></span>
   </div>
   <div class="alert alert-flotante alert-warning" role="alert">
      <span class="feather icon-alert-triangle"></span>
      <div class="w-100 mx-3 d-flex flex-column">
         <span class="label-large fw-bold">Ingrese monto</span>
         <span class="label-large siaf-grey-30">clasificador: 2.1.1.1.1.3, meta: 1</span>
         <span class="label-large siaf-grey-30">clasificador: 2.1.1.1.1.3, meta: 3</span>
         <span class="label-large siaf-grey-30">clasificador: 2.1.1.1.1.3, meta: 22</span>
      </div>
      <span class="feather icon-x ms-auto c-pointer"></span>
   </div>`;
	alertEmbebido = `   // Alert Success
   <div class="alert alert-embebido alert-success" role="alert">
      <span class="feather icon-check-circle"></span>
      <div class="w-100 mx-3 d-flex flex-column">
         <span class="label-large fw-bold">...</span>
         <span class="label-large siaf-grey-30">...</span>
      </div>
      <span class="feather icon-x ms-auto c-pointer"></span>
   </div>

   // Alert Error
   <div class="alert alert-embebido alert-danger" role="alert">
      <span class="feather icon-slash"></span>
      <div class="w-100 mx-3 d-flex flex-column">
         <span class="label-large fw-bold">...</span>
         <span class="label-large siaf-grey-30">...</span>
      </div>
      <span class="feather icon-x ms-auto c-pointer"></span>
   </div>

   // Alert Info
   <div class="alert alert-embebido alert-info" role="alert">
      <span class="feather icon-info"></span>
      <div class="w-100 mx-3 d-flex flex-column">
         <span class="label-large fw-bold">...</span>
         <span class="label-large siaf-grey-30">...</span>
      </div>
      <!--<span class="feather icon-x ms-auto c-pointer"></span>-->
   </div>

   // Alert Warning
   <div class="alert alert-embebido alert-warning" role="alert">
      <span class="feather icon-alert-triangle"></span>
      <div class="w-100 mx-3 d-flex flex-column"> 
         <span class="label-large fw-bold">...</span>
         <span class="label-large siaf-grey-30">...</span>
      </div>
      <span class="feather icon-x ms-auto c-pointer"></span>
   </div>
   `;

}
