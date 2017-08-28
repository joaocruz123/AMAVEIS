import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastrarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage {
  music: string;
  serie: string;

   public event = {
    timeEnds: '1990-02-20'
  }

  turnoAlertOpts: { title: string, subTitle: string };
  serieAlertOpts: { title: string, subTitle: string };
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.turnoAlertOpts = {
      title: 'Turno da Vaga',
      subTitle: 'Selecione o Turno da Vaga'
    };
    this.serieAlertOpts = {
      title: 'Serie',
      subTitle: 'Selecione a serie da Vaga'
    };
  }
stpSelect() {
    console.log('STP selected');
}


}
