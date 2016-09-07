import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QRCodeComponent} from 'ng2-qrcode'

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [QRCodeComponent],
})
export class HomePage {
  constructor(private navCtrl: NavController) {

  }
}
