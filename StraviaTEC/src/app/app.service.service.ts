import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './Models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  base = '/api/usuario';
  public lista = [];
  constructor(private http: HttpClient) { }


  // tslint:disable-next-line:typedef
  getUsers(): Observable<User>{


    return this.http.get<User>(this.base);

  }

  // @ts-ignore
  addUsers(User : User): Observable<any>{
    return this.http.post(this.base,User)
  }
}
