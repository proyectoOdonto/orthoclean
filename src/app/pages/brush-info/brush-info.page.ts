import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-brush-info',
  templateUrl: './brush-info.page.html',
  styleUrls: ['./brush-info.page.scss'],
})
export class BrushInfoPage implements OnInit {


  constructor(private streamingMedia: StreamingMedia, private youtube: YoutubeVideoPlayer
  ) { }






  ngOnInit() {


  }
  playVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => {
        console.log('Error streaming')
        console.log("daniel ", e);
      },

      orientation: 'landscape',
      shouldAutoClose: true,
      controls: false
    };

    this.streamingMedia.playVideo('https://drive.google.com/open?id=1KrCc6scGoF6SQn4EQPGwK7DDXCOwJahs', options);

  }


  openMyVideo(id) {
    this.youtube.openVideo(id);
  }

}
