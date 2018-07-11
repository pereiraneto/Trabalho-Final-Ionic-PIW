import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { TimelinePage } from '../timeline/timeline';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public usuarios: UsuarioProvider) {
      
  }
  
  cadastrar(){
    this.navCtrl.push(SigninPage);
  }

  login(email, password){
    this.usuarios.singIn(email, password)
      .subscribe(
        data =>{
          this.navCtrl.setRoot(TimelinePage);
        },
        error =>{
          console.log(error);
        }
      )
  }

}