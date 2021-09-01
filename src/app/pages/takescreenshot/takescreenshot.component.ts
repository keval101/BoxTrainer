import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderService } from 'src/app/features/header/header.service';
import { ChoosescreenshotService } from '../choose-screenshot/choosescreenshot.service';
import { SetupService } from '../setup/setup.service';
import { TakescreenshotService } from './takescreenshot.service';
import { ConfirmationService } from 'primeng/api';
import { EvolutionService } from '../evaluation/evolution.service';


@Component({
  selector: 'app-takescreenshot',
  templateUrl: './takescreenshot.component.html',
  styleUrls: ['./takescreenshot.component.scss']
})
export class TakescreenshotComponent implements OnInit,OnDestroy{
  recording: boolean;
  isScreenShot: boolean = true;
  takeScreenshot: boolean = false;
  onCameraClick : boolean = false;
  imageCapture:boolean = false
  videoStream:any;
  deviceInfoId:any
  @ViewChild('video') video:ElementRef; 
  @ViewChild('canvas') canvas: ElementRef;
  cancelText:string;
  constructor(
    private router: Router,
    public TranslateService: TranslateService,
    private evolutionService:EvolutionService,
    private takescreenshotService: TakescreenshotService,
    private setupSerice:SetupService,
    private confirmationService: ConfirmationService,
    private headerService:HeaderService
  ) {
    this.TranslateService.get('takescreenshot.cancelText').subscribe( (text: string) => {
      this.cancelText = text
    })

    this.deviceInfoId = this.setupSerice.cameraIdInformation

  }

  ngOnInit(): void {
    this.recording = true;
    this.takeScreenshot = true
  }

  ngAfterViewInit() {
    let _video = this.video.nativeElement;
    let tempThis = this
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: {deviceId: tempThis.deviceInfoId ? {exact: tempThis.deviceInfoId} : undefined}})
      .then(stream => {
        (<any>window).stream = stream;
        this.videoStream= stream;
        _video.srcObject = stream;
        _video.play();
      })
    }
  }

  takeScreenShot(){
   this.onCameraClick = true
   this.takeScreenshot = false
   this.imageCapture = true
   this.isScreenShot = false;
   var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
  }

  onRetake(){
   this.takeScreenshot = true
   this.onCameraClick = false
   this.imageCapture = false
   this.isScreenShot = true;
  }

  onDone(){
    this.router.navigate(['/choosescreenshot']);
    this.takescreenshotService.resultImageSource = this.canvas.nativeElement.toDataURL("image/png");
  }
  onCancelExersice(){
    console.log("keval")
    this.confirmationService.confirm({
      message: this.cancelText,

      accept: () => {
        this.router.navigate(['/setup']);
      },
    });
  }

  ngOnDestroy(){
    if ((<any>window).stream) {
      (<any>window).stream.getTracks().forEach(track => {
        track.stop();
      });
  }
  }

}
