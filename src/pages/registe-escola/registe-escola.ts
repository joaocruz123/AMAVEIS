import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisteEscolaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registe-escola',
  templateUrl: 'registe-escola.html',
})
export class RegisteEscolaPage {
  mod:string;
  modAlertOpts: { title: string, subTitle: string };
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
    this.modAlertOpts = {
      title: 'Sexo',
      subTitle: 'Selecione o seu sexo.'
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisteEscolaPage');
  }

   doAlert(){
    let alert = this.alertCtrl.create({
      title:'Escola Cadastrada!',
      message:'Os dados da Escola foram cadastrados no sistema',
      buttons:['Ok']
    });
    alert.present()
  }


}
