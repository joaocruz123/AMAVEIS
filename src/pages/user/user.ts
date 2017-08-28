
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the UserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  profilePicture: string;
  profileRef: any;
  errorMessage: any;
  placeholderPicture = 'http://api.adorable.io/avatar/200/bob';

  enableNotifications = true;
  language: any;
  currency: any;
  paymentMethod: any;

  languages = ['English', 'Portuguese', 'French'];
  paymentMethods = ['Paypal', 'Credit Card'];
  currencies = ['USD', 'BRL', 'EUR'];

  user = {
    name: 'Usuario Fulano',
    imageUrl: 'assets/img/boss-1.png'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams ) { }

}
