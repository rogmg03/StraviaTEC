import { Component, OnInit } from '@angular/core';
import {AppService} from "../../ApiCoreService.service";
import {contactenos} from "../Models/contactenosModel";

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent  {

  public contact : contactenos = new class implements contactenos {
    apellidos: string;
    email: string;
    id: number;
    nombre: string;
    razon: string;
    telefono: string;
  }
  public lista: contactenos;
  constructor(private webservices: AppService) { }

  ngOnInit(): void {


  }



  addcontact(contact) {
    this.webservices.addcontact(contact).subscribe(
      Response => {

        console.log(Response);


      }
    );

  }

}
