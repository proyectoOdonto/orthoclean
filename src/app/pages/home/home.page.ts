import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router
  ) { }

    goChronometersPage(){
      this.router.navigate(['/chronometers']);
    }

  goBrushInfoPage(){
    this.router.navigate(['/brush-info']);
  }

  goInstrumentsInfoPage(){
    this.router.navigate(['/instruments-info']);
  }

  goExamPage(){
    this.router.navigate(['/exam']);
  }

  goContactUsPage(){
    this.router.navigate(['/contact-us']);
  }

}



