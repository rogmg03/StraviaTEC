import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppService} from './app.service.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponentlogin } from './loginview/loginview.component';
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { RetosComponent } from './retos/retos.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { SeguimientosComponent } from './seguimientos/seguimientos.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { GruposComponent } from './grupos/grupos.component';
import { IncripcionesComponent } from './incripciones/incripciones.component';
import { ReportesComponent } from './reportes/reportes.component';


@NgModule({
  declarations: [
    AppComponent,
    AppComponentlogin,
    HomeComponent,
    RetosComponent,
    CarrerasComponent,
    SeguimientosComponent,
    ContactenosComponent,
    GruposComponent,
    IncripcionesComponent,
    ReportesComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
