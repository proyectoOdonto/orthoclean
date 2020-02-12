import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
//import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { DomSanitizer } from '@angular/platform-browser'


@Component({
  selector: 'app-brush-info',
  templateUrl: './brush-info.page.html',
  styleUrls: ['./brush-info.page.scss'],
})
export class BrushInfoPage implements OnInit {
  vid = "https://www.youtube.com/embed/J407UFrSy7E";
  vid2 = "https://drive.google.com/file/d/1KrCc6scGoF6SQn4EQPGwK7DDXCOwJahs/preview";

  constructor(/* private streamingMedia: StreamingMedia, */
    private youtube: YoutubeVideoPlayer, private domSanitizer: DomSanitizer
  ) { }



  sanitize(vid) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(vid);
  }


  ngOnInit() {


  }

  openMyVideo(id) {
    this.youtube.openVideo(id);
  }

  /*  playVideo() {
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

    this.streamingMedia.playVideo('https://drive.google.com/file/d/1KrCc6scGoF6SQn4EQPGwK7DDXCOwJahs/preview', options);

  }  */

}
