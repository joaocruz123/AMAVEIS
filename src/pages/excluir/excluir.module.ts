import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExcluirPage } from './excluir';

@NgModule({
  declarations: [
    ExcluirPage,
  ],
  imports: [
    IonicPageModule.forChild(ExcluirPage),
  ],
})
export class ExcluirPageModule {}
