import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  url: string = "http://localhost:3000/api/posts";

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

  getPosts(){
    return this.http.get(this.url + "?token=" + this.getToken())
      .map((response:Response)=>(response.json()));
  }

  insertPost(texto, like, uid){
    return this.http.post(this.url, {
      texto, like, uid
    }).map((response: Response) => (response.json()));
  }

}
