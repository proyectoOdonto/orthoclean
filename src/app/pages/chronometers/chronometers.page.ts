import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { IonSlides } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';


@Component({
  selector: 'app-chronometers',
  templateUrl: './chronometers.page.html',
  styleUrls: ['./chronometers.page.scss'],
})

export class ChronometersPage implements OnInit, OnDestroy {

  @ViewChild('mySlider', { static: true }) slider: IonSlides;


  steps = [
    {
      id: 0,
      time: 10,
      src: "../../../assets/images/img1.jpg"
    },
    {
      id: 1,
      time: 20,
      src: "../../../assets/images/img1.jpg"
    },
    {
      id: 2,
      time: 30,
      src: "../../../assets/images/img1.jpg"
    },
    {
      id: 2,
      time: 0,
      src: "../../../assets/images/img1.jpg"
    },
  ]

  count = 0;
  porcentage = 0;
  currentIndex = 0;
  observable;
  suscription;

  constructor(private nativeAudio: NativeAudio) {

  }

  ngOnInit() {


    this.nativeAudio.preloadSimple('audioClock', './assets/audios/ticTac.mp3').then(
      ()=>{
        console.log("Audio subido con éxito");
      }, (value)=>{
        console.log("error: "+value);
      }
      );

      this.nativeAudio.play('audioClock').then(()=>{}, ()=>{});


    this.currentIndex = 0;
    this.reStartTimer(true);
  }

  onSlideChanged() {

    this.slider.getActiveIndex().then(
      (index) => {
        this.currentIndex = index;
        this.reStartTimer(false);
      });

  }

  reStartTimer(isFirstTime) {

    if (!isFirstTime) {
      //Detiene el cronometro actual
      this.suscription.unsubscribe();
    }
    

    //Asigna el tiempo del nuevo cronometro
    this.count = this.steps[this.currentIndex]['time'];
    this.porcentage = ((this.count*100)/this.steps[this.currentIndex]['time'])/100;
    if(this.count>0){
      
    this.observable = interval(1000);
    //Este metodo es llamado cada segundo
    this.suscription = this.observable.subscribe((val) => {
      this.nativeAudio.play('audioClock').then(()=>{}, ()=>{});

      //Si llega al segundo 0 cambia al siguiente slide
      if (this.count == 0) {
        this.slider.slideNext();
      }

      this.count--;
      this.porcentage = ((this.count*100)/this.steps[this.currentIndex]['time'])/100;
    });
    }


  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

}
