import {Component} from '@angular/core';
import {Page, Loading, NavController} from 'ionic-angular';
import {Dropbox} from '../../providers/dropbox/dropbox';


@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [Dropbox]
})
export class HomePage {

  private nav:NavController = null;
  private dropbox: Dropbox = null;
  private depth = 0;
  private folders =[];
  static get parameters(){
    return [[NavController], [Dropbox]];
  }

  constructor(nav: NavController,dropbox: Dropbox) {

    this.nav = nav;
    this.dropbox = dropbox;
    this.depth = 0;

    this.dropbox.setAccessToken("WyiECK0XdtAAAAAAAAATj8pjFHXP2neYSjVs_otnv8l2D-Go3RZ4KRyQhlbMnXFP");
    this.folders = [];

    let loading = Loading.create({
      content: 'Syncing from Dropbox...'
    });

    this.nav.present(loading);

    this.dropbox.getFolders("undefined").subscribe(data => {
      this.folders = data.entries;
      loading.dismiss();
    }, (err) => {
      console.log(err);
    });
  }

  openFolder(path){

    let loading = Loading.create({
      content: 'Syncing from Dropbox...'
    });

    this.nav.present(loading);

    this.dropbox.getFolders(path).subscribe(data => {
      this.folders = data.entries;
      this.depth++;
      loading.dismiss();
    }, err => {
      console.log(err);
    });
  }

  goBack(){

    let loading = Loading.create({
      content: 'Syncing from Dropbox...'
    });

    this.nav.present(loading);

    this.dropbox.goBackFolder().subscribe(data => {
      this.folders = data.entries;
      this.depth--;
      loading.dismiss();
    }, err => {
      console.log(err);
    });
  }
}
