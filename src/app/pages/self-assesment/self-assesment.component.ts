import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TakescreenshotService } from '../takescreenshot/takescreenshot.service';
import { SelfAssesmentService } from './self-assesment.service';
@Component({
  selector: 'app-self-assesment',
  templateUrl: './self-assesment.component.html',
  styleUrls: ['./self-assesment.component.scss'],
})
export class SelfAssesmentComponent implements OnInit {
  recording: boolean;
  isScreenShot: boolean;
  items: any[] = [];
  responsiveOptions:any;
  resultImage: any;
  touchScreen:boolean;
  constructor(
    private router: Router,
    public TranslateService: TranslateService,
    private takescreenshotService : TakescreenshotService,
    private selfAssesmentService : SelfAssesmentService
  ) {

    if(window.matchMedia("(pointer: coarse)").matches) {
      this.touchScreen = true
      
      setTimeout(() => {
        var btnNext = document.querySelector(".p-carousel-next");
        var btnPrev = document.querySelector(".p-carousel-prev");
        btnNext.classList.add("leval") 
        btnPrev.classList.add("leval") 
      }, 1);
    }else{
      this.touchScreen = false
    }
    console.log(this.touchScreen)


    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  pageIndex: any;
  setPage(indexOf){
    this.pageIndex = indexOf.page;
    this.selfAssesmentService.imageIndex = this.pageIndex
}

  ngOnInit(): void {
    this.isScreenShot = true;
    this.recording = true;
    this.items = [
      { img : '../../../assets/images/screenshot0.png'},
      { img : '../../../assets/images/screenshot1.png'},
      { img : '../../../assets/images/screenshot2.png'},
      { img : '../../../assets/images/screenshot3.png'}
    ]
    let array = this.takescreenshotService.captures
    this.resultImage = this.takescreenshotService.resultImageSource
  }

  redirectTo() {
    this.router.navigate(['/self-assesment-questions']);
  }
}
