import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  url: string = "http://localhost:3000/api/usuarios";

  constructor(public http: Http) {
  }

  getToken(){
    return localStorage.getItem("token");
  }

  setToken(token){
    localStorage.setItem("token", token);
  }

  hasToken(){
    return !!localStorage.getItem("token"); 
  }

  insertUsuario(name, email, password){
    console.log(name);
    console.log(email);
    console.log(password);
    
    return this.http.post(this.url, {      
      name, email, password
    }).map((response: Response) => (response.json()));    
  }

  singIn(email, password){
    return this.http.post(this.url + "/signin", {
      email,
      password
    }).map((response:Response) => {
      let user = response.json();
      this.setToken(user.token);
      return user;
    });
  }

}
