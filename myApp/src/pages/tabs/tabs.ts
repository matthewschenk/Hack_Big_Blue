import { Component } from '@angular/core';
import { GeneratorPage } from '../generator/generator';
import { InventoryPage } from '../inventory/inventory';
import { AddPage } from '../add/add';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    console.log(navParams.get('val'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputPage');
  }
  
  inventoryPage = InventoryPage;
  generatorPage = GeneratorPage;
  addPage = AddPage;

}
