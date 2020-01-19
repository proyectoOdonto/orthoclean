import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-brush-info',
  templateUrl: './brush-info.page.html',
  styleUrls: ['./brush-info.page.scss'],
})
export class BrushInfoPage implements OnInit {

  constructor(
    private youtube: YoutubeVideoPlayer
  ) { }

  ngOnInit() {
  }


  openMyVideo(id) {
    this.youtube.openVideo(id);
  }

}
