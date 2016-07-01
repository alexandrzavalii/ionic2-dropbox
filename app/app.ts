import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {LoginPage} from './pages/login/login';
import {Dropbox} from './providers/dropbox/dropbox';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [Dropbox]
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    this.rootPage = LoginPage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
