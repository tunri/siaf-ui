import { Component, OnInit } from '@angular/core';
import { dataTable, dataTableCheck } from 'src/app/data';

@Component({
	selector: 'app-tables',
	templateUrl: './tables.component.html',
	styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  
	constructor() {	this.paginacionTable(); this.pagination() }
    
	table = dataTable;
	tableCheck = dataTableCheck;
	value = false;
	indice = 0;
    // Paginación
	tablePaginacion;
	page = 1;
	pageSize = 10;
	collectionSize = dataTable.length;
	to = 0;
	from = 0;

	paginacionTable() {
		this.tablePaginacion = dataTable
			.map((item, i) => ({ id: i + 1, ...item }))
			.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
	}

	ngOnInit(): void {
	}
	
	pagination() {
		this.to = ((this.pageSize * this.page) - this.pageSize ) + 1;
		this.from = (this.pageSize * this.page) - (this.pageSize - this.tablePaginacion.length);
	}

	select(item) {
		this.table = this.table.map(tablleItem => { tablleItem.activo = false; return tablleItem;} );
		item.activo = true;
	}
	select2(itemcheck) {
		itemcheck.activo = !itemcheck.activo;
	}
	editable(event:any, itemEditable) {
		if (event.target.value) { 
			itemEditable.editable = true;
		} else {
			itemEditable.editable = false;
		}
	}
	tablaconsulta = `   // Consulta
   <div class="siaf-card border-0 py-1  mb-4">
      <div class="table-sticky">
         <table class="table table-consult m-0">
            <thead>
               <tr>
                  <th>Código</th>
                  <th>Descripción</th>
                  <th class="text-end">Monto</th>
               </tr>
            </thead>
            <tbody>
               <tr class="c-inherit" *ngFor="let item of table">
                  <td>{{item.codigo}}</td>
                  <td>{{item.descripcion}}</td>
                  <td class="text-end">{{item.monto}}</td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>`;
	tablaconsultaMonto = `   // Consulta monto
   <div class="siaf-card border-0 py-1  mb-4">
      <div class="table-sticky">
         <table class="table table-consult m-0">
            <thead>
               <tr>
                  <th>Código</th>
                  <th>Descripción</th>
                  <th class="text-end">Monto</th>
               </tr>
            </thead>
            <tbody>
               <tr class="c-inherit" *ngFor="let item of table">
                  <td>{{item.codigo}}</td>
                  <td>{{item.descripcion}}</td>
                  <td class="text-end">{{item.monto}}</td>
               </tr>
            </tbody>
            <tfoot>
               <tr>
                  <td colspan="2"></td>
                  <td class="fw-bold text-end">0.00</td>
               </tr>
            </tfoot>
         </table>
      </div>
   </div>`;
	tablaconsultaResponsive = `   // Responsive
   <div class="siaf-card border-0 py-1  mb-4">
      <div class="table-responsive">
         <div class="table-sticky">
            <table class="table table-consult m-0">
               <thead>
                  <tr>
                     <th>Código</th>
                     <th>Descripción</th>
                     <th>Descripción</th>
                     <th>Descripción</th>
                     <th>Descripción</th>
                     <th class="text-end">Monto</th>
                  </tr>
               </thead>
               <tbody>
                  <tr class="c-inherit" *ngFor="let item of table">
                     <td>{{item.codigo}}</td>
                     <td>{{item.descripcion}}</td>
                     <td>{{item.descripcion}}</td>
                     <td>{{item.descripcion}}</td>
                     <td>{{item.descripcion}}</td>
                     <td class="text-end">{{item.monto}}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>`;
    tablaseleccion = `   // Selección
   <div class="siaf-card border-0 py-1  mb-4">
      <div class="table-sticky">
         <table class="table m-0">
            <thead>
               <tr>
                  <th>Clasificador</th>
                  <th class="text-end">Saldo PCA Priorizado</th>
               </tr>
            </thead>
            <tbody>
               <tr *ngFor="let item of table" (click)="select(item)" [ngClass]="{'active': item.activo === true }">
                  <td>
                  2.1. 1 1. 1 2
                  <span *ngIf="item.metas" class="badge bg-warning ms-2">5 Metas</span>
                  </td>
                  <td class="text-end">{{item.monto}}</td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>`;
    tablaseleccionTs = `   // Función
   select(item) {
      this.table = this.table.map(tablleItem => { tablleItem.activo = false; return tablleItem;} );
      item.activo = true;
   }`;
    tablacheckbox = `   // Checkbox
   <div class="siaf-card border-0 py-1  mb-4">
      <div class="table-sticky">
         <table class="table m-0">
            <thead>
               <tr>
                  <th width="40"></th>
                  <th>S. Func.</th>
                  <th class="text-end">Saldo PIM</th>
               </tr>
            </thead>
            <tbody>
               <tr *ngFor="let itemcheck of tableCheck; let i = index" (click)="select2(itemcheck)" [ngClass]="{'active': itemcheck.activo === true }">
                  <td>
                  <div class="form-check">
                  <input type="checkbox" (change)="select2(itemcheck)" [checked]="itemcheck.activo" class="form-check-input" id="{{i}}">
                  <label class="form-check-label" [attr.for]=" i " ></label>
                  </div>
                  </td>
                  <td>{{itemcheck.codigo}}</td>
                  <td class="text-end">{{itemcheck.monto}}</td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>`;
    tablacheckboxTs = `   // Función
   select2(itemcheck) {
      itemcheck.activo = !itemcheck.activo;
   }`;
    tablabotones = `   // Botones
   <div class="siaf-card border-0 py-1  mb-4">
      <div class="table-sticky">
         <table class="table m-0">
            <thead>
               <tr>
                  <th>Código</th>
                  <th>Descripción</th>
                  <th class="text-end">Monto</th>
                  <th width="40"></th>
               </tr>
            </thead>
            <tbody>
               <tr *ngFor="let item of table" (click)="select(item)" [ngClass]="{'active': item.activo === true }">
                  <td>{{item.codigo}}</td>
                  <td>{{item.descripcion}}</td>
                  <td class="text-end">{{item.monto}}</td>
                  <td>
                     <button type="button" class="btn btn-icon btn-outline-light btn-sm">
                     <span class="feather icon-trash-2"></span>
                     </button>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>`;
    tablacabecera = `   // Cabecera
   <div class="siaf-card border-0 py-1  mb-4">
      <div class="table-heading border-bottom px-2">
         <h6 class="label-large m-0 fw-bold">Meta</h6>
         <button type="button" class="btn btn-outline-primary">
            <span class="feather icon-plus me-1"></span>
            Agregar
         </button>
      </div>
      <div class="table-sticky">
         <table class="table m-0">
            <thead>
               <tr>
                  <th>Código</th>
                  <th>Descripción</th>
                  <th class="text-end">Monto</th>
               </tr>
            </thead>
            <tbody>
               <tr class="c-inherit" *ngFor="let item of table">
                  <td>{{item.codigo}}</td>
                  <td>{{item.descripcion}}</td>
                  <td class="text-end">{{item.monto}}</td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>`;
    tablapaginacion = `   // Paginación
   <div class="siaf-card border-0 pt-1  mb-4">
      <div class="table-sticky">
         <table class="table m-0">
            <thead>
               <tr>
                  <th>Código</th>
                  <th>Descripción</th>
                  <th class="text-end">Monto</th>
               </tr>
            </thead>
            <tbody>
               <tr class="c-inherit" *ngFor="let item of tablePaginacion">
                  <td>{{item.codigo}}</td>
                  <td>{{item.descripcion}}</td>
                  <td class="text-end">{{item.monto}}</td>
               </tr>
            </tbody>
         </table>
      </div>
      <div class="table-footer border-top px-2">
         <div class="d-flex align-items-center">
            <span class="label-regular me-2">Filas</span>	
            <select class="form-control form-select" [(ngModel)]="pageSize" (ngModelChange)="paginacionTable();pagination()">
               <option [ngValue]="10">10</option>
               <option [ngValue]="25">25</option>
               <option [ngValue]="50">50</option>
            </select>
         </div>
         <div class="content-pagination">
            <span class="label-regular">{{to}} a {{from}} de {{collectionSize}} registros</span>
            <ngb-pagination [maxSize]="3" [rotate]="true" [ellipses]="false" [collectionSize]="collectionSize" [(page)]="page"
               [pageSize]="pageSize" (pageChange)="paginacionTable(); pagination()">
               <ng-template ngbPaginationPrevious>
                  <span class="feather icon-chevron-left"></span>
               </ng-template>
               <ng-template ngbPaginationNext>
                  <span class="feather icon-chevron-right"></span>
               </ng-template>
            </ngb-pagination>
         </div>
      </div>
   </div>`;
    tablapaginacionTs = `   // Paginación
   tablePaginacion;
   page = 1;
   pageSize = 10;
   collectionSize = dataTable.length;
   to = 0;
   from = 0;
   paginacionTable() {
      this.tablePaginacion = dataTable
         .map((item, i) => ({ id: i + 1, ...item }))
         .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
   }
   pagination() {
      this.to = ((this.pageSize * this.page) - this.pageSize ) + 1;
      this.from = (this.pageSize * this.page) - (this.pageSize - this.tablePaginacion.length);
   }`;
    tablaeditable = `   // Editable
   <div class="siaf-card border-0 py-1  mb-4">
      <div class="table-sticky">
         <table class="table m-0">
            <thead>
               <tr>
                  <th>Código</th>
                  <th>Descripción</th>
                  <th class="text-end">Editable</th>
                  <th class="text-end">Monto</th>
               </tr>
            </thead>
            <tbody>
               <tr class="c-inherit" *ngFor="let item of table, let i = index">
                  <td>{{item.codigo}}</td>
                  <td>{{item.descripcion}}</td>
                  <td class="text-end bg-secondary" [ngClass]="{'bg-change': item.editable}">
                     <input class="form-control form-control-sm text-end" (keyup)="editable($event, item)" type="text" placeholder="00.0">
                  </td>
                  <td class="text-end">{{item.monto}}</td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>`;
    tablaeditableTs = `   // Función
   editable(event:any, itemEditable) {
      if (event.target.value) { 
         itemEditable.editable = true;
      } else {
         itemEditable.editable = false;
      }
   }`;
}
