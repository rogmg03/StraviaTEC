import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './usermodel';

const httpoptions={
  headers: new HttpHeaders({

    'Access-Control-Allow-Origin' : 'https://localhost:44388/',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'

  })

};

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
    console.log('REPLY +++++++++++++++++++');
  }

  // @ts-ignore
  addUsers(User : User): Observable<any>{
    return this.http.post(this.base,User)
  }
}
