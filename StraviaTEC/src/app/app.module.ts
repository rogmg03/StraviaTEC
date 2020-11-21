import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppService} from '../ApiCoreService.service';
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
import { AmigosComponent } from './amigos/amigos.component';
// import {ImageUploadModule} from 'angular2-image-upload'


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
    ReportesComponent,
    AmigosComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    // ImageUploadModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
