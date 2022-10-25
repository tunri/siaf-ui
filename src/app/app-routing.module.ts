import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertComponent } from './componentes/alert/alert.component';
import { BadgeComponent } from './componentes/badge/badge.component';
import { ButtonComponent } from './componentes/button/button.component';
import { ColoresComponent } from './componentes/colores/colores.component';
import { DatepickerComponent } from './componentes/datepicker/datepicker.component';
import { DependenciasComponent } from './componentes/dependencias/dependencias.component';
import { DescripcionComponent } from './componentes/descripcion/descripcion.component';
import { EspaciadoComponent } from './componentes/espaciado/espaciado.component';
import { IconosComponent } from './componentes/iconos/iconos.component';
import { InputComponent } from './componentes/input/input.component';
import { IntegracionComponent } from './componentes/integracion/integracion.component';
import { LabelsComponent } from './componentes/labels/labels.component';
import { NgselectComponent } from './componentes/ngselect/ngselect.component';
import { RadioComponent } from './componentes/radio/radio.component';
import { RepositorioComponent } from './componentes/repositorio/repositorio.component';
import { TablesComponent } from './componentes/tables/tables.component';
import { TabsComponent } from './componentes/tabs/tabs.component';
import { TipografiaComponent } from './componentes/tipografia/tipografia.component';
import { TooltipComponent } from './componentes/tooltip/tooltip.component';

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "descripcion" },
    { path: "descripcion", component: DescripcionComponent },
    { path: "dependencias", component: DependenciasComponent },
    { path: "repositorio", component: RepositorioComponent },
    { path: "integracion", component: IntegracionComponent },
	{ path: "colores", component: ColoresComponent },
	{ path: "tipografia", component: TipografiaComponent },
	{ path: "espaciado", component: EspaciadoComponent },
	{ path: "alerta", component: AlertComponent },
	{ path: "botones", component: ButtonComponent },
	{ path: "insignias", component: BadgeComponent },
	{ path: "radio", component: RadioComponent },
	{ path: "tablas", component: TablesComponent },
	{ path: "formulaio", component: InputComponent },
	{ path: "ngselect", component: NgselectComponent },
	{ path: "datepicker", component: DatepickerComponent },
	{ path: "iconos", component: IconosComponent },
	{ path: "tabs", component: TabsComponent },
	{ path: "tooltip", component: TooltipComponent },
	{ path: "labels", component: LabelsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
