import { Component} from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CadastrarPage } from "../cadastrar/cadastrar";
import { ExcluirPage } from "../excluir/excluir";
import { VagaPage } from "../vaga/vaga";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  appCtrl: any;
  viewCtrl: any;
  constructor(public nav: NavController, public modalCtrl: ModalController,
) {   
    
  }

  openCadastrar(){
    this.nav.push(CadastrarPage)
  }
  openExcluir(){
    this.nav.push(ExcluirPage)
  }

  openVaga(){
    this.openModal(VagaPage)
  }

 openModal(pageName) {
    this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' })
                  .present();
  }
}

