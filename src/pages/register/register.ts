import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  sexo: string;
  serie:string;
  

  sexoAlertOpts: { title: string, subTitle: string };
  serieAlertOpts: { title: string, subTitle: string };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController ) {
     this.sexoAlertOpts = {
      title: 'Sexo',
      subTitle: 'Selecione o seu sexo.'
    };
     this.serieAlertOpts = {
      title: 'Serie',
      subTitle: 'Selecione a sua serie'
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  doAlert(){
    let alert = this.alertCtrl.create({
      title:'Aluno Cadastrado!',
      message:'Os dados do Aluno foram cadastrados no sistema',
      buttons:['Ok']
    });
    alert.present()
  }

}
