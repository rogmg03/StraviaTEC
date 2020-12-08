import { Component, OnInit } from '@angular/core';
import {AppComponentlogin} from "../loginview/loginview.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  public log : AppComponentlogin;
  constructor() { }



  ngOnInit(): void {
    this.log.usuariostring;


}

}
