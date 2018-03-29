import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public content = `
    <button id="ctaButton" class="SecondPage">
      BOOM
    </button>
  `;

  public content_2 = ``;


  public ctaButton: any;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.ctaButton = document.getElementById('ctaButton').addEventListener('click', () => {
      const butttonCSSClassList: string = document.getElementById('ctaButton').className;

      let pageToNavigate = butttonCSSClassList.replace(/ .*/, '');

      console.log(pageToNavigate);
      this.navCtrl.push(pageToNavigate);
    });
  }
}
