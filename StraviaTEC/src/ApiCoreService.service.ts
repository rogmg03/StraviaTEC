import {Injectable, Type} from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./app/Models/UserModel";
import {contactenos} from "./app/Models/contactenosModel";


@Injectable({
  providedIn: 'root'
})
export class AppService {


  base = '/api/usuario';
public lista = [];
  constructor(private http: HttpClient) { }



  // tslint:disable-next-line:typedef
  getUsers(): Observable<User>{


    return this.http.get<User>('/api/usuario');

  }

  getUsersbyID(id : number): Observable<User>{


    return this.http.get<User>('/api/usuario/find/'+id);

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
    return this.http.delete<User>('/api/usuario'+'/'+id);
  }



  addcontact(cont:contactenos): Observable<contactenos>{
    console.log('usuarios'+cont);
    // @ts-ignore
    try {


      return this.http.post<contactenos>('/api/contactenos',cont);}
    catch (e){

      console.log(e);
    }
  }

}



