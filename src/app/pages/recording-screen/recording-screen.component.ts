import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RecordingService } from './recording.service';
import { fadeAnimation } from '../../shared/app.animation';
import { interval, Subscription } from 'rxjs';
import videojs from 'video.js';
import * as RecordRTC from 'recordrtc';
// register videojs-record plugin with this import
import * as Record from 'videojs-record/dist/videojs.record.js';
import { DomSanitizer } from '@angular/platform-browser';
import { HeaderService } from 'src/app/features/header/header.service';

@Component({
  selector: 'app-recording-screen',
  templateUrl: './recording-screen.component.html',
  styleUrls: ['./recording-screen.component.scss'],
  animations: [fadeAnimation],
})
export class RecordingScreenComponent implements OnInit {
  recording: boolean = false;
  isScreenShot: boolean = false;
  takeScreenshot: boolean = false;
  isSidebarOpen: boolean = false;
  counterTime:boolean = false;
  recordingFinish:boolean = false;
  videoSource:any;
  paddingClass:boolean;
  recordingDurationTime:string;
  data = [3,2,1,"go"]
  text:any;
  micValue:boolean;
  // index to create unique ID for component
  idx = 'clip1';
  
  private config: any;
  private player: any; 
  private plugin: any;

  @ViewChild('video') videoEle : ElementRef
  constructor(
    public TranslateService: TranslateService,
    private router: Router,
    private recordingService: RecordingService,
    private sanitizer : DomSanitizer,
    private headerService : HeaderService
  ) {
    this.player = false;
    // save reference to plugin (so it initializes)
    this.plugin = Record;
    // video.js configuration
    this.config = {
      controls: false,
      autoplay: false,
      fluid: false,
      loop: false,
      width: 320,
      height: 240,
      bigPlayButton: false,
      controlBar: {
        fullscreenToggle: false,
        volumePanel: false,
        recordIndicator: false,
      },
      plugins:{
        // configure videojs-record plugin
        record: {
          audio: true,
          video: {
            facingMode: 'environment',
          },
          debug: true,
          maxLength: 10000
        }
      }
    };
  }

  ngOnInit(): void {
    const obs = interval(1000)
    const timer:Subscription = obs.subscribe( (d) => {
      this.counterTime = true;
      let text = this.data[d];
      this.text = text

      if(d == 3){
        this.paddingClass = true
      }
    })
    setTimeout(() => {
        timer.unsubscribe()
        this.counterTime = false
    }, 5000);

    setTimeout( () => {
      this.videoInitialize()
    },500)
  }

  onRetake() {
    this.takeScreenshot = false;
  }

  onDone() {
    this.router.navigate(['/choosescreenshot']);
  }

  onFinish() {
    this.recordingService.fullscreen = false;
    this.isSidebarOpen = false;
    this.recordingFinish = true;
    this.player.record().stopDevice();
  }

  takeScreenShot() {
    this.takeScreenshot = true;
  }

  onSlidebarOpen(value) {
    this.isSidebarOpen = value;
  }

  onSlidebarClose() {
    this.isSidebarOpen = false;
  }

    // reference to the element itself: used to access events and methods
    private _elementRef: ElementRef;


  // use ngAfterViewInit to make sure we initialize the videojs element
  // after the component template itself has been rendered

  videoInitialize(){
    let el = 'video';
this.headerService.muteUnmuteMic.subscribe(
      res =>{
        console.log(res)
        this.micValue = res
        console.log(this.micValue)
        this.config.plugins.record.audio = this.micValue
      })

    // setup the player via the unique element ID
    console.log(this.config.plugins.record.audio)

    this.player = videojs(document.getElementById(el), this.config, () => {
      // print version information at startup
      var msg = 'Using video.js ' + videojs.VERSION +
        ' with videojs-record ' + videojs.getPluginVersion('record') +
        ' and recordrtc ' + RecordRTC.version;
      videojs.log(msg);

    });

    this.player.on('ready', () => {
      this.player.record().getDevice()
    })

    setTimeout(() => {
      this.player.record().start()
      this.videoEle.nativeElement.addEventListener('timeupdate', currentTime)
    }, 4000);

    const currentTime = () => {
      let currentTime = this.player.record().getCurrentTime()
      let currentMinutes = Math.floor( currentTime / 60)
      let currentSeconds = Math.floor(currentTime - currentMinutes * 60)
      this.recordingDurationTime = `${currentMinutes < 10 ? '0'+currentMinutes : currentMinutes }:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`
      this.recordingService.recordTimeDuration.next(this.recordingDurationTime)
    }
     
    // user completed recording and stream is available
    this.player.on('finishRecord', () => {
      // recordedData is a blob object containing the recorded data that
      // can be downloaded by the user, stored on server etc.
      this.videoSource = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.player.recordedData));
    });

    // error handling
    this.player.on('error', (element, error) => {
    });

    this.player.on('deviceError', () => {
    });
  }

  redirectToPhoto(){
    this.router.navigate(['/takescreenshot']);
  }

}
