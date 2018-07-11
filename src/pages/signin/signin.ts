import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  nome: String;
  email: String;
  senha: String;

  constructor(public navCtrl: NavController, public usuarios: UsuarioProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  cadastrar(){    
    this.usuarios.insertUsuario(this.nome, this.email, this.senha)
      .subscribe(
        data => {
          console.log(data);
          this.navCtrl.pop();
        },
        error =>{console.log(error)} 
      );                          
  }

}
