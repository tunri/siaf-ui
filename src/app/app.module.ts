import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DescripcionComponent } from './componentes/descripcion/descripcion.component';
import { DependenciasComponent } from './componentes/dependencias/dependencias.component';
import { RepositorioComponent } from './componentes/repositorio/repositorio.component';
import { IntegracionComponent } from './componentes/integracion/integracion.component';
import { PrismComponent } from './share/prism/prism.component';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import { ColoresComponent } from './componentes/colores/colores.component';
import { TipografiaComponent } from './componentes/tipografia/tipografia.component';
import { EspaciadoComponent } from './componentes/espaciado/espaciado.component';
import { AlertComponent } from './componentes/alert/alert.component';
import { ButtonComponent } from './componentes/button/button.component';
import { BadgeComponent } from './componentes/badge/badge.component';
import { RadioComponent } from './componentes/radio/radio.component';
import { TablesComponent } from './componentes/tables/tables.component';
import { InputComponent } from './componentes/input/input.component';
import { NgselectComponent } from './componentes/ngselect/ngselect.component';
import { DatepickerComponent } from './componentes/datepicker/datepicker.component';
import { IconosComponent } from './componentes/iconos/iconos.component';
import { TabsComponent } from './componentes/tabs/tabs.component';
import { TooltipComponent } from './componentes/tooltip/tooltip.component';
import { LabelsComponent } from './componentes/labels/labels.component';

@NgModule({
    declarations: [
        AppComponent,
        DescripcionComponent,
        DependenciasComponent,
        RepositorioComponent,
        IntegracionComponent,
        PrismComponent,
        ColoresComponent,
        TipografiaComponent,
        EspaciadoComponent,
        AlertComponent,
        ButtonComponent,
        BadgeComponent,
        RadioComponent,
        TablesComponent,
        InputComponent,
        NgselectComponent,
        DatepickerComponent,
        IconosComponent,
        TabsComponent,
        TooltipComponent,
        LabelsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule,
        NgSelectModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }
