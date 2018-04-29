import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GeneratorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generator',
  templateUrl: 'generator.html'
})
export class GeneratorPage {

  tops = ["assets/imgs/tops/0.jpg", "assets/imgs/tops/1.jpg","assets/imgs/tops/2.jpg",
  "assets/imgs/tops/3.jpg","assets/imgs/tops/4.jpg"];
  topsUrl = "assets/imgs/tops/0.jpg";

  bottoms = ["assets/imgs/bottoms/0.jpg", "assets/imgs/bottoms/1.jpg","assets/imgs/bottoms/2.jpg",
  "assets/imgs/bottoms/3.jpg"];
  bottomsUrl = "assets/imgs/bottoms/0.jpg";

  shoes = ["assets/imgs/shoes/0.jpg", "assets/imgs/shoes/1.jpg","assets/imgs/shoes/2.jpg"];
  shoesUrl = "assets/imgs/shoes/0.jpg";

  outer = ["assets/imgs/outer_wear/0.jpg", "assets/imgs/outer_wear/1.jpg","assets/imgs/outer_wear/2.jpg"];
  outerUrl = "assets/imgs/outer_wear/0.jpg";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneratorPage');
  }

  generateTops(){

  var onum = Math.floor(Math.random() * this.outer.length);
  this.outerUrl = this.outer[onum];

  var rnum = Math.floor(Math.random() * this.tops.length);
  this.topsUrl = this.tops[rnum];

  var bnum = Math.floor(Math.random() * this.bottoms.length);
  this.bottomsUrl = this.bottoms[bnum];

  var snum = Math.floor(Math.random() * this.shoes.length);
  this.shoesUrl = this.shoes[snum];  
  }
}
