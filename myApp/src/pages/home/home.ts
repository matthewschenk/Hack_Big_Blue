import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InputPage } from '../input/input';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  navigateToOtherPage(): void {
    this.navCtrl.push(TabsPage, {
      val: 'clothes'
    });
  }
}
