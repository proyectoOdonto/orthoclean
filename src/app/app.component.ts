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
          icon: "home-orthoclean",
          url: "/home"
        },
        {
          pagename: "Cronometro",
          icon: "chronometers-orthoclean",
          url: "/chronometers"
        },
        {
          pagename: "Cepillado",
          icon: "brush-orthoclean",
          url: "/brush-info"
        },
        {
          pagename: "Instrumentos",
          icon: "instruments-orthoclean",
          url: "/instruments-info"
        },
        {
          pagename: "Examen",
          icon: "exam-orthoclean",
          url: "/exam"
        },
        {
          pagename: "Contactanos",
          icon: "contact-orthoclean",
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
