import { Component } from '@angular/core';
import {HomePage} from '../home/home';
import {Page, Loading, NavController } from 'ionic-angular';
import {Dropbox} from '../../providers/dropbox/dropbox';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  private dropbox: Dropbox = null;

  static get parameters() {
    return [[NavController], [Dropbox]];
  }

  constructor(private nav: NavController, dropbox: Dropbox) {
      this.nav = nav;
      this.dropbox = dropbox;
  }

  login() {
    this.dropbox.login().then((success) => {
      this.nav.setRoot(HomePage);
    }, (err) => {
      console.log(err);
    });
  }

}
