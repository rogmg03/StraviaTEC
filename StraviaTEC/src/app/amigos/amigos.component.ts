import { Component, OnInit } from '@angular/core';
import {amigo} from "../Models/AmigosModel";
import {AppService} from "../../ApiCoreService.service";
import {User} from "../Models/UserModel";

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent{

  constructor(private webservices: AppService) { }

  ngOnInit(): void {
  }
  public  nombre : string;

  public amg : amigo  = new class implements amigo {
    id: number;
    seguido: number;
    seguidor: number;
  }
public lista:User = new class implements User {
  apellido1: string;
  apellido2: string;
  contrasena: string;
  cuentaBancaria: string;
  edad: number;
  fechaNacimiento: Date;
  nacionalidad: string;
  nombre: string;
  rol: string;
  usuario: string;
  usuarioId: number;
} ;

  getamigos(nombre : string) {
    console.log('NOMBRE'+nombre);
    this.webservices.getUsersbyname(nombre).subscribe(
      Response => {
        this.lista =  Response;

        console.log(Response);
      }
    );
  }

  addamigos(amg) {
    console.log('NOMBRE'+amg);

    this.webservices.addamigos(amg).subscribe(
      Response => {
        this.amg =  Response;

        console.log(Response);
      }
    );
  }



}
