import {Injectable, Type} from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./app/Models/UserModel";
import {contactenos} from "./app/Models/contactenosModel";
import {pxr} from "./app/Models/PatrocinadoresporretosModels";
import {pxc} from "./app/Models/PatrocinadoresporcarreraModels";
import {Patrocinadores} from "./app/Models/PatrocinadoresModels";
import {insreto} from "./app/Models/InscripdepretoModels";
import {inscarrera} from "./app/Models/InscripDepCarreraModel";
import {gxr} from "./app/Models/GruposprivadosporretoModel";
import {gxc} from "./app/Models/GruposprivadosporcarreraModel";
import {amigo} from "./app/Models/AmigosModel";
import {concatMap  } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AppService {

 /*
  Contiene todos los metodos correspondientes para el manejo de datos
  de los usuarios

  Metodos : Get,post,delete,update,getbyid,deletebyid

*/


  base = '/api/usuario';
public lista = [];
  constructor(private http: HttpClient) { }



  // tslint:disable-next-line:typedef
  getUsers(): Observable<User>{

    try{
    return this.http.get<User>('/api/usuario');}
    catch(e){
      return e;

    }

  }

  getUsersbyname(nombre:string): Observable<User>{

    try{
      return this.http.get<any>('/api/usuario/get/'+nombre)
        ;}
    catch(e){
      return e;

    }

  }

  getUsersbyID(id : number): Observable<User>{

    try{
    return this.http.get<User>('/api/usuario/find/'+id);}
  catch(e){
    return e;

  }

  }




  // @ts-ignore
  addUsers(Usuario:User): Observable<User>{
    console.log('usuarios'+Usuario);
    // @ts-ignore
    try {


    return this.http.post<User>('/api/usuario',Usuario);}
    catch (e){

      console.log(e);
    }
  }

  editUser(Usuario:User): Observable<User>{
    console.log('usuarios'+Usuario);
    // @ts-ignore
    return this.http.put<User>('/api/usuario',Usuario);
  }

  deleteUser(id:number): Observable<User>{
    console.log('usuarios'+id);
    // @ts-ignore
    return this.http.delete<User>('/api/usuario'+'/del/'+id);
  }




  /*

  Contiene todos los metodos necesarios para el manejo de los
  datos de la vista contactenos

  */

  addcontact(cont:contactenos): Observable<contactenos>{
    console.log('usuarios'+cont);
    // @ts-ignore
    try {


      return this.http.post<contactenos>('/api/contactenos',cont);}
    catch (e){

      console.log(e);
    }
  }




  /*

  contiene todos los necesarios para el manejo de datos
  para determinar los patrocinadores de un determinado reto

   */



  getpxr(): Observable<pxr>{
    try{

    return this.http.get<pxr>('/api/Patrocinadoresporretos');}

  catch(e){
      return e;

    }

  }

  addpxr(p:pxr): Observable<pxr>{
    console.log('usuarios'+p);
    // @ts-ignore
    try {

      return this.http.post<pxr>('/api/Patrocinadoresporretos',p);}
    catch (e){

      console.log(e);
    }
  }

  /*

  contiene todos los necesarios para el manejo de datos
  para determinar los patrocinadores de un determinado carrera
   */

  getpxc(): Observable<pxr>{
    try{

      return this.http.get<pxr>('/api/Patrocinadoresporretos');}

    catch(e){
      return e;

    }

  }

  addpxc(p:pxc): Observable<pxc>{
    console.log('usuarios'+p);
    // @ts-ignore
    try {

      return this.http.post<pxc>('/api/Patrocinadoresporcarrera',p);}
    catch (e){

      console.log(e);
    }
  }



  /*

  contiene todos los necesarios para el manejo de datos
  para determinar los patrocinadores de un determinado carrera
   */

  getpatro(): Observable<Patrocinadores>{
    try{

      return this.http.get<Patrocinadores>('/api/Patrocinadores');}

    catch(e){
      return e;

    }

  }

  addpatro(p:pxc): Observable<Patrocinadores>{
    console.log('usuarios'+p);
    // @ts-ignore
    try {

      return this.http.post<Patrocinadores>('/api/Patrocinadores',p);}
    catch (e){

      console.log(e);
    }
  }

  /*

  contiene todos los necesarios para el manejo de datos
  para determinar los los retos de cada deportista
   */

  getincripcionreto(): Observable<insreto>{


    try{

      return this.http.get<insreto>('/api/Inscripdepreto');}

    catch(e){
      return e;

    }

  }

  addincripcionreto(p:insreto): Observable<insreto>{
    console.log('usuarios'+p);
    // @ts-ignore
    try {

      return this.http.post<insreto>('/api/Inscripdepreto',p);}
    catch (e){

      console.log(e);
    }
  }



  /*

  contiene todos los necesarios para el manejo de datos
  para determinar los las carreras de cada deportista
   */

  getincripcioncarrera(): Observable<inscarrera>{


    try{

      return this.http.get<inscarrera>('/api/InscripDepCarrera');}

    catch(e){
      return e;

    }

  }

  addincripcioncarrera(p:inscarrera): Observable<inscarrera>{
    console.log('usuarios'+p);
    // @ts-ignore
    try {

      return this.http.post<inscarrera>('/api/InscripDepCarrera',p);}
    catch (e){

      console.log(e);
    }
  }



  /*

  contiene todos los necesarios para el manejo de datos
  para determinar los grupos que pueden asistir a un reto
   */

  getgruposporreto(): Observable<gxr>{


    try{

      return this.http.get<gxr>('/api/Gruposprivadosporreto');}

    catch(e){
      return e;

    }

  }

  addgruposporreto(p:gxr): Observable<gxr>{
    console.log('usuarios'+p);
    // @ts-ignore
    try {

      return this.http.post<gxr>('/api/InscripDepCarrera',p);}
    catch (e){

      console.log(e);
    }
  }



  deletegruposporreto(id:number): Observable<gxr>{
    console.log('usuarios'+id);
    // @ts-ignore
    return this.http.delete<gxr>('/api/InscripDepCarrera'+'/del/'+id);
  }



  /*

 contiene todos los necesarios para el manejo de datos
 para determinar los grupos que pueden asistir a una carrera
  */

  getgruposporcarrera(): Observable<gxc>{


    try{

      return this.http.get<gxc>('/api/Gruposprivadosporcarrera');}

    catch(e){
      return e;

    }

  }

  addgruposporcarrera(p:gxc): Observable<gxc>{
    console.log('usuarios'+p);
    // @ts-ignore
    try {

      return this.http.post<gxc>('/api/Gruposprivadosporcarrera',p);}
    catch (e){

      console.log(e);
    }
  }



  deletegruposporcarrera(id:number): Observable<gxc>{
    console.log('usuarios'+id);
    // @ts-ignore
    return this.http.delete<gxc>('/api/Gruposprivadosporcarrera'+'/del/'+id);
  }

  addamigos(p:amigo): Observable<amigo>{
    console.log('usuarios'+p);
    // @ts-ignore
    try {

      return this.http.post<amigo>('/api/Amigos',p);}
    catch (e){

      console.log(e);
    }
  }

}



