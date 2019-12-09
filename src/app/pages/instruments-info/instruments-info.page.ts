import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instruments-info',
  templateUrl: './instruments-info.page.html',
  styleUrls: ['./instruments-info.page.scss'],
})
export class InstrumentsInfoPage implements OnInit {


    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    slideOpts = {
      initialSlide: 1,
      speed: 400
    };

  constructor() { }

  ngOnInit() {
  }

}
