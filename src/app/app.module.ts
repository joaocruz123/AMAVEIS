import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { CadastrarPage } from "../pages/cadastrar/cadastrar";
import { ExcluirPage } from "../pages/excluir/excluir";
import { RegisterPage } from "../pages/register/register";
import { RegisteEscolaPage } from "../pages/registe-escola/registe-escola";
import { VagaPage } from "../pages/vaga/vaga";
import { BuscaPage } from "../pages/busca/busca";
import { UserPage } from "../pages/user/user";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CadastrarPage,
    ExcluirPage,
    RegisterPage,
    RegisteEscolaPage,
    VagaPage,
    BuscaPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CadastrarPage,
    ExcluirPage,
    RegisterPage,
    RegisteEscolaPage,
    VagaPage,
    BuscaPage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

