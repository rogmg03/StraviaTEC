import { Component , OnInit} from '@angular/core';
import {AppService} from './app.service.service';
import {User} from './UserModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebasconexion';

  public lista: any;
  public listaaux: any;

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

  // tslint:disable-next-line:typedef
  getUsers() {
    this.webservices.getUsers().subscribe(
      Response => {
        this.lista =  Response;




        console.log(this.lista);
        console.log(this.listaaux);

      }
    );
  }

  // tslint:disable-next-line:typedef
  adduser(){
    const usuraio: User = {usuarioId: 44444};
    this.webservices.addUsers(usuraio).subscribe(
      Response => {
        console.log(this.lista);
        console.log(this.listaaux);

      }
    );

  }

}
