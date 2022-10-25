import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	regular = `   // Grande
   <input class="form-control form-control-lg" type="text" placeholder="Formulario grande">
   // Regular
   <input class="form-control" type="text" placeholder="Formulario normal">
   // Pequeño
   <input class="form-control form-control-sm" type="text" placeholder="Formulario pequeño">`;

	lectura = `   // Grande
   <input class="form-control form-control-lg" readonly type="text" placeholder="Formulario grande">
   // Regular
   <input class="form-control" readonly type="text" placeholder="Formulario normal">
   // Pequeño
   <input class="form-control form-control-sm" readonly type="text" placeholder="Formulario pequeño">`;

	deshabilitado = `   // Grande
   <input class="form-control form-control-lg" disabled type="text" placeholder="Formulario grande">
   // Regular
   <input class="form-control" disabled type="text" placeholder="Formulario normal">
   // Pequeño
   <input class="form-control form-control-sm" disabled type="text" placeholder="Formulario pequeño">`;

	seleccionar = `   // Grande
   <select class="form-control form-select form-control-lg">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
   </select>
   // Regular
   <select class="form-control form-select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
   </select>
   // Pequeño
   <select class="form-control form-select form-control-sm">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
   </select>`;

	busqueda = `   // Grande
   <input class="form-control form-icon search form-control-lg" type="text" placeholder="Formulario grande">
   // Regular
   <input class="form-control form-icon search" type="text" placeholder="Formulario normal">
   // Pequeño
   <input class="form-control form-icon search form-control-sm" type="text" placeholder="Formulario pequeño">`;

	busquedaBoton = `   // Grande
   <div class="form-group form-group-search">
      <input class="form-control form-icon search form-control-lg" type="text" placeholder="Formulario normal">
      <button type="button" class="btn btn-icon btn-lg btn-outline-light">
      <span class="feather icon-chevron-down"></span>
      </button>
   </div>
   // Regular
   <div class="form-group form-group-search">
      <input class="form-control form-icon search" type="text" placeholder="Formulario normal">
      <button type="button" class="btn btn-icon btn-outline-light">
      <span class="feather icon-chevron-down"></span>
      </button>
   </div>
   // Pequeño
   <div class="form-group form-group-search">
      <input class="form-control form-icon search form-control-sm" type="text" placeholder="Formulario normal">
      <button type="button" class="btn btn-icon btn-sm btn-outline-light">
      <span class="feather icon-chevron-down"></span>
      </button>
   </div>`;

	estados = `   // Correcto
   <div class="form-group">
      <input type="text" class="form-control is-valid" placeholder="First name">
      <div class="valid-feedback">
         Correcto
      </div>
   </div>
   // Incorrecto
   <div class="form-group">
      <input type="text" class="form-control is-invalid" placeholder="Username">
      <div class="invalid-feedback">
         Campo imcompleto
      </div>
   </div>
   // Informativo
   <div class="form-group">
      <input type="text" class="form-control" id="ejemplo" placeholder="Ingresar campo">
      <small class="form-text text-muted">Todos sus datos son importante.</small>
   </div>`;

	etiquetas = `   // Regular
   <div class="form-group">
      <label for="ejemplo">Label</label>
      <input type="text" class="form-control" id="ejemplo" placeholder="Ingresar campo">
   </div>
   // Requerido
   <div class="form-group">
      <label for="ejemplo">Label <span class="siaf-red">*</span></label>
      <input type="text" class="form-control" id="ejemplo" placeholder="Ingresar campo">
   </div>`;

	ejemplos = `   // Regular
   <div class="siaf-card border-0 p-3  mb-4">
      <div class="alert alert-embebido alert-warning" role="alert">
         <span class="feather icon-alert-triangle"></span>
         <div class="w-100 mx-3 d-flex flex-column">
            <!-- <span class="label-large fw-bold">Título de alerta</span> -->
            <span class="label-large siaf-grey-30">Recuerda que debe llenar todos los campos</span>
         </div>
         <!-- <span class="feather icon-x ms-auto c-pointer"></span> -->
      </div>
      <form>
         <div class="row g-2">
            <div class="col-sm-6 form-group">
               <label>Documento</label>
               <input type="text" class="form-control">
            </div>
            <div class="col-sm-6">
               <div class="row g-2">
                  <div class="form-group col-sm-6">
                     <label>Número</label>
                     <input type="text" value="123456" readonly class="form-control">
                  </div>
                  <div class="form-group col-sm-6">
                     <label>Fecha</label>
                     <input type="text" disabled class="form-control">
                  </div>
               </div>
            </div>
            <div class="col-sm-6 form-group">
               <label>Rubro</label>
               <select class="form-control form-select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
               </select>
            </div>
            <div class="col-sm-6 form-group">
               <label>Tipo certificación</label>
               <select class="form-control form-select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
               </select>
            </div>
            <div class="col-sm-12 form-group m-0">
               <label>Justificación</label>
               <textarea class="form-control" rows="1"></textarea>
            </div>
         </div>
      </form>
   </div>`;

}
