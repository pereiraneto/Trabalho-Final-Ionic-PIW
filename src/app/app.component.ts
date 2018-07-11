import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from './../pages/login/login';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { TimelinePage } from '../pages/timeline/timeline';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public usuarios: UsuarioProvider) {
    if(this.usuarios.hasToken()){
      this.rootPage = TimelinePage;
    }
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  toPosts(){
    this.rootPage = TimelinePage;
  }
}
