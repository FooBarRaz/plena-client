import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: './about.html'
})
export class AboutPage {
  public whatItsAbout: string;

  constructor(public navCtrl: NavController) {
    this.whatItsAbout = "nothing";

  }

  public setWhatItsAllAbout(value: string):void {
    this.whatItsAbout = value;
  }
}
