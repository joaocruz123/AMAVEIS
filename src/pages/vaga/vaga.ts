import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the VagaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vaga',
  templateUrl: 'vaga.html',
})
export class VagaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VagaPage');
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
