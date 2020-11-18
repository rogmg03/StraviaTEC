import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponentlogin} from "./loginview/loginview.component";
import { CarrerasComponent} from "./carreras/carreras.component";
import  {ContactenosComponent} from "./contactenos/contactenos.component";
import {GruposComponent} from "./grupos/grupos.component";
import {HomeComponent} from "./home/home.component";
import {IncripcionesComponent} from "./incripciones/incripciones.component";
import {ReportesComponent} from "./reportes/reportes.component";
import {RetosComponent} from "./retos/retos.component";
import {SeguimientosComponent} from "./seguimientos/seguimientos.component";
const routes: Routes = [

  {path:"login", component:AppComponentlogin},
  {path:"carreras", component:CarrerasComponent},
  {path:"contactenos", component:ContactenosComponent},
  {path:"grupos", component:GruposComponent},
  {path:"home", component:HomeComponent},
  {path:"inscripciones", component:IncripcionesComponent},
  {path:"reportes", component:ReportesComponent},
  {path:"retos", component:RetosComponent},
  {path:"seguimientos", component:SeguimientosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
