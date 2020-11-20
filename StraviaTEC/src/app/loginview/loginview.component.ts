import { Component, OnInit } from '@angular/core';
import {AppService} from "../../ApiCoreService.service";
import {User} from "../Models/UserModel";


@Component({
  selector: 'app-loginview',
  templateUrl: './loginview.component.html',
  styleUrls: ['./loginview.component.css']
})
export class AppComponentlogin {
  title = 'pruebasconexion';
  public error :string;
  public lista: User;
  public listausuario: User;
  public usuariostring : number;
  public pass : string;
  public edad : number;

  public usuario: User = new class implements User {
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
  }

  public columnas: string[] = [
    'usuarioID',
    'nombre',
    'apellido1',
    'apellido2',
    'nacionalidad',
    'fechaNacimiento',
    'cuentaBancaria',
    'edad',
    'usuario',
    'contraseña'

  ];

  constructor(private webservices: AppService) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {

    // this.getUsers();
  }


  validateLogin(){

    try {
     // this.getUsersbyID();
      if(this.listausuario.usuarioId != this.usuariostring || this.listausuario.contrasena !=this.pass){

        this.error="Usuario o contraseña incorrecta";
        console.log(this.usuariostring + ' '+ this.pass);
      }

      else {
        this.error="Todo OK"
        this.usuariostring=null;
        this.pass=null;
      }

    }
    catch (e){
      console.log(e);
    }




  }
  // tslint:disable-next-line:typedef
  getUsers() {
    this.webservices.getUsers().subscribe(
      Response => {
        this.lista =  Response;

        console.log(Response);
      }
    );
  }


  getUsersbyID() {
    try {


    this.webservices.getUsersbyID(this.usuariostring).subscribe(
      Response => {
        this.listausuario =  Response;

        console.log(Response);
      }
    );}
    catch (e){
      console.log(e);
    }
  }

  // tslint:disable-next-line:typedef
  adduser(usuario) {
    usuario.contrasena = this.pass.toString();
    this.webservices.addUsers(usuario).subscribe(
      Response => {

        console.log(Response);


      }
    );

  }

  edituser(usuario) {

    this.webservices.editUser(usuario).subscribe(
      Response => {

        console.log(Response);


      }
    );

  }

  deleteuser(usuario: User) {

    this.webservices.addUsers(usuario).subscribe(
      Response => {

        console.log(Response);


      }
    );

  }

  updateage(){


      const convertAge = new Date(this.usuario.fechaNacimiento);
     this.edad = Math.abs(Date.now() - convertAge.getTime());
    this.usuario.edad = Math.floor((this.edad / (1000 * 3600 * 24))/365);
     console.log(this.usuario.edad + ' edad');
     console.log(Math.abs(Date.now() - convertAge.getTime()));




  }

}
