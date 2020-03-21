import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {

  time = 5;
  currentQuestion = null;
  currentIndex = 0;
  indexSelected = null;
  initialLives = 4;
  lives = 0;
  arrLives = [];
  questions = [];
  progress = 0.0;
  totalQuestions = 0;

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {
    this.initialize();
  }

  ionViewWillEnter() {
    this.initialize();
  }

  initialize() {
    this.time = 5;
    this.currentQuestion = null;
    this.currentIndex = 0;
    this.indexSelected = null;
    this.initialLives = 4;
    this.lives = 0;
    this.arrLives = [];
    this.questions = [];
    this.progress = 0.0;
    this.totalQuestions = 0;

    this.lives = this.initialLives;
    for (let i = 0; i < this.initialLives; i++) {
      this.arrLives.push(true);
    }

    this.questions = [
      {
        title: "¿Pregunta 1?",
        options: [
          {
            option: "opcion 1",
            state: true
          },
          {
            option: "opcion 2",
            state: false
          },
          {
            option: "opcion 3",
            state: false
          },
        ]
      },
      {
        title: "¿Pregunta 2?",
        options: [
          {
            option: "opcion 2.1",
            state: false
          },
          {
            option: "opcion 2.2",
            state: true
          },
          {
            option: "opcion 2.3",
            state: false
          },
        ]
      },
      {
        title: "¿Pregunta 3?",
        options: [
          {
            option: "opcion 3.1",
            state: false
          },
          {
            option: "opcion 3.2",
            state: false
          },
          {
            option: "opcion 3.3",
            state: true
          },
        ]
      },
      {
        title: "¿Pregunta 4?",
        options: [
          {
            option: "opcion 4.1",
            state: true
          },
          {
            option: "opcion 4.2",
            state: false
          },
          {
            option: "opcion 4.3",
            state: false
          },
        ]
      },
      {
        title: "¿Pregunta 5?",
        options: [
          {
            option: "opcion 5.1",
            state: true
          },
          {
            option: "opcion 5.2",
            state: false
          },
          {
            option: "opcion 5.3",
            state: false
          },
        ]
      },
      {
        title: "¿Pregunta 6?",
        options: [
          {
            option: "opcion 6.1",
            state: true
          },
          {
            option: "opcion 6.2",
            state: false
          },
          {
            option: "opcion 6.3",
            state: false
          },
        ]
      },
    ];

    this.currentQuestion = this.questions[0];
    this.totalQuestions = this.questions.length;
  }

  saveAnswer(index) {

    this.indexSelected = index;

    var currentOptions = this.currentQuestion['options'];
    if (currentOptions[index]['state'] != true) { //Si la respuesta es incorrecta
      //disminuye una vida
      this.arrLives[this.lives - 1] = false;
      this.lives--

      if (this.lives == 0) {
        //Perdiste
        this.router.navigateByUrl('/wrong');

      } else {

        //Pasa a la siguiente pregunta
        var temp = this.questions.shift();
        this.questions.push(temp);
        this.currentQuestion = this.questions[0];
        this.wrongToast();
      }

    } else { //Si la respuesta es correcta
      this.questions.shift();
      if (this.questions.length > 0) {
        //pasa a la siguiente pregunta      
        this.currentQuestion = this.questions[0];
        this.correctToast();
        this.updateBar(this.totalQuestions - (this.questions.length));
      } else {
        //Ganaste
        this.router.navigateByUrl('/correct');

      }
    }
  }

  async correctToast() {
    const toast = await this.toastController.create({
      message: '¡Muy bien!. Respuesta correcta',
      duration: 1000,
      color: "success"
    });
    toast.present();
  }

  async wrongToast() {
    const toast = await this.toastController.create({
      message: 'Respuesta Incorrecta',
      duration: 1000,
      color: "danger"
    });
    toast.present();
  }

  updateBar(count) {
    this.progress = count / this.totalQuestions;
  }
}
