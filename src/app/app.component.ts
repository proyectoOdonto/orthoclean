import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  pages: any[] = [];
  selectedPath = '/home';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pages = [
        {
          pagename: "Inicio",
          icon: "home",
          url: "/home"
        },
        {
          pagename: "Cronometro",
          icon: "home",
          url: "/chronometers"
        },
        {
          pagename: "Cepillado",
          icon: "home",
          url: "/brush-info"
        },
        {
          pagename: "Instrumentos",
          icon: "home",
          url: "/instruments-info"
        },
        {
          pagename: "Examen",
          icon: "home",
          url: "/exam"
        },
        {
          pagename: "Contactanos",
          icon: "home",
          url: "/contact-us"
        }
      ];

      this.router.events.subscribe((event: RouterEvent) => {
        this.selectedPath = event.url;
      });

    });
  }


  goToPage(url){
    this.router.navigate([url]);
  }

  goChronometersPage() {
    this.router.navigate(['/chronometers']);
  }

  goBrushInfoPage() {
    this.router.navigate(['/brush-info']);
  }

  goInstrumentsInfoPage() {
    this.router.navigate(['/instruments-info']);
  }

  goExamPage() {
    this.router.navigate(['/exam']);
  }

  goContactUsPage() {
    this.router.navigate(['/contact-us']);
  }
}
