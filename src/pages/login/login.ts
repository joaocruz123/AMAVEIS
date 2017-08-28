import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController, App, ModalController } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { RegisteEscolaPage } from "../registe-escola/registe-escola";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 public loginForm: any;
  public backgroundImage = 'assets/img/fundo.jpg';

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public app: App,
    public nav: NavController
  ) { }

  login() {
     const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Logged in!',
        subTitle: 'Thanks for logging in.',
        buttons: ['Dismiss']
      });
      alert.present();
    });

    loading.present();
  }

  goTocadAluno() {
     this.nav.push(RegisterPage);
  }

  goTocadEscola() {
     this.nav.push(RegisteEscolaPage);
  }

  openModal(pageName) {
    this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' })
                  .present();
  }

}
