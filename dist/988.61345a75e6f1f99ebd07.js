(self.webpackChunkonline_box_trainer=self.webpackChunkonline_box_trainer||[]).push([[988],{5988:(e,t,n)=>{"use strict";n.r(t),n.d(t,{VideoscreenModule:()=>y});var o=n(8583),i=n(5035),r=n(4116),s=n(639),a=n(6088),l=n(9790),d=n(7451),c=n(7564),g=n(3679);const p=["video"];function h(e,t){1&e&&s._UZ(0,"img",27)}function u(e,t){1&e&&s._UZ(0,"img",28)}function m(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",29),s._UZ(1,"img",30),s.TgZ(2,"p-slider",31),s.NdJ("ngModelChange",function(t){return s.CHM(e),s.oxw().val=t})("ngModelChange",function(t){return s.CHM(e),s.oxw().volumeChanged(t)}),s.qZA(),s.qZA()}if(2&e){const e=s.oxw();s.Q6J("@fadeAnimation",void 0),s.xp6(2),s.Q6J("ngModel",e.val)("min",0)("max",100)("step",10)}}const v=function(e){return{footerAnimation:e}},f=function(e){return{rightReservedTop:e}},b=function(e){return{logoTop:e}},_=[{path:"",component:(()=>{class e{constructor(e,t,n){this.router=e,this.headerService=t,this.Translateservice=n,this.videoFullScreen=!1,this.val=30,this.headerService.videoFullscreen.subscribe(e=>{this.videoFullScreen=1==e})}ngOnInit(){this.isScreenShot=!0,this.recording=!0,this.isVideoScreen=!0,this.width=window.innerWidth}togglePlayPause(){this.video.nativeElement.paused?(this.playVideo=!0,this.video.nativeElement.play()):(this.playVideo=!1,this.video.nativeElement.pause())}ngAfterViewInit(){this.video.nativeElement.addEventListener("timeupdate",()=>{document.getElementById("progressBar").style.width=this.video.nativeElement.currentTime/this.video.nativeElement.duration*100+"%",this.video.nativeElement.ended&&(this.playVideo=!1)}),document.getElementById("seekbar").addEventListener("click",e=>{this.video.nativeElement.currentTime=e.offsetX/this.width*this.video.nativeElement.duration})}onPlayPause(){this.togglePlayPause()}onRestart(){this.video.nativeElement.currentTime>0&&(!0===this.playVideo?(this.video.nativeElement.currentTime=0,this.playVideo=!0,this.video.nativeElement.play()):!1===this.playVideo&&(this.video.nativeElement.currentTime=0,this.playVideo=!1,this.video.nativeElement.pause()))}volumeChanged(e){e.cancelable&&e.preventDefault(),this.val=e,this.video.nativeElement.volume=this.val/100}redirectToBack(){this.router.navigate(["/intro"])}redirectTo(){this.playVideo=!1,this.video.nativeElement.pause(),this.router.navigate(["/setup"])}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(i.F0),s.Y36(a.r),s.Y36(l.sK))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-videoscreen"]],viewQuery:function(e,t){if(1&e&&s.Gf(p,5),2&e){let e;s.iGM(e=s.CRH())&&(t.video=e.first)}},decls:36,vars:27,consts:[[1,"container"],[1,"header"],[3,"onFinishRecording","onScreenShot","videoScreen"],[1,"videoContainer"],["src","assets/video/video.mp4","id","myvideo","type","video/mp4"],["video",""],[1,"bottomContainer"],[1,"buttons"],[1,"playedBtn"],[1,"playPauseBtn",3,"click"],["src","assets/icnons/fast-backward-solid.svg","alt","play","id","restart",1,"icon"],["src","assets/icnons/play-solid.svg","alt","play","class","icon","id","playpause",4,"ngIf"],["src","assets/icnons/pause-solid.svg","alt","pause","class","icon","id","playpause",4,"ngIf"],[1,"buttonGroup"],[1,"button","button-exSmall","button-outline",3,"click"],[1,"pi","pi-chevron-left"],[1,"button","button-small","button-fill",3,"click"],[1,"footer",3,"ngClass"],["id","seekbar",1,"progressbar"],["id","progressBar",1,"progressbar-color"],[1,"footer__text"],[1,"footer__text-bold","m-0"],[1,"footer__text-light","m-0"],[1,"rightReserved","m-0",3,"ngClass"],[1,"logo",3,"ngClass"],["src","assets/images/Logo2.svg","alt","logo"],["class","slider",4,"ngIf"],["src","assets/icnons/play-solid.svg","alt","play","id","playpause",1,"icon"],["src","assets/icnons/pause-solid.svg","alt","pause","id","playpause",1,"icon"],[1,"slider"],["src","../../../assets/icnons/volume.svg","alt","","id","speaker"],[1,"slideBar",3,"ngModel","min","max","step","ngModelChange"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s._UZ(2,"app-header",2),s.qZA(),s.TgZ(3,"div",3),s._UZ(4,"video",4,5),s.qZA(),s.TgZ(6,"div",6),s.TgZ(7,"div",7),s.TgZ(8,"div",8),s.TgZ(9,"button",9),s.NdJ("click",function(){return t.onRestart()}),s._UZ(10,"img",10),s.qZA(),s.TgZ(11,"button",9),s.NdJ("click",function(){return t.onPlayPause()}),s.YNc(12,h,1,0,"img",11),s.YNc(13,u,1,0,"img",12),s.qZA(),s.qZA(),s.TgZ(14,"div",13),s.TgZ(15,"button",14),s.NdJ("click",function(){return t.redirectToBack()}),s._UZ(16,"i",15),s.qZA(),s.TgZ(17,"button",16),s.NdJ("click",function(){return t.redirectTo()}),s._uU(18),s.ALo(19,"translate"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(20,"div",17),s.TgZ(21,"div",18),s._UZ(22,"div",19),s.qZA(),s.TgZ(23,"div",20),s.TgZ(24,"p",21),s._uU(25),s.ALo(26,"translate"),s.qZA(),s.TgZ(27,"p",22),s._uU(28),s.ALo(29,"translate"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(30,"p",23),s._uU(31),s.ALo(32,"translate"),s.qZA(),s.TgZ(33,"div",24),s._UZ(34,"img",25),s.qZA(),s.YNc(35,m,3,5,"div",26),s.qZA()),2&e&&(s.xp6(2),s.Q6J("onFinishRecording",t.recording)("onScreenShot",t.isScreenShot)("videoScreen",t.isVideoScreen),s.xp6(10),s.Q6J("ngIf",!t.playVideo),s.xp6(1),s.Q6J("ngIf",t.playVideo),s.xp6(5),s.hij(" ",s.lcZ(19,13,"video.prepareSetup")," "),s.xp6(2),s.Q6J("ngClass",s.VKq(21,v,t.videoFullScreen)),s.xp6(5),s.Oqu(s.lcZ(26,15,"video.title")),s.xp6(3),s.Oqu(s.lcZ(29,17,"video.name")),s.xp6(2),s.Q6J("ngClass",s.VKq(23,f,t.videoFullScreen)),s.xp6(1),s.hij(" ",s.lcZ(32,19,"home.rightReserved")," "),s.xp6(2),s.Q6J("ngClass",s.VKq(25,b,t.videoFullScreen)),s.xp6(2),s.Q6J("ngIf",!t.videoFullScreen))},directives:[d.G,o.O5,o.mk,c.iR,g.JJ,g.On],pipes:[l.X$],styles:['.button[_ngcontent-%COMP%]{height:4.8rem;border-radius:.5rem;font-size:2.4rem;background-color:initial;border:.2rem solid #0000;cursor:pointer;font-weight:500;display:flex;justify-content:center;align-items:center}.button-big[_ngcontent-%COMP%]{width:32rem}.button-exSmall[_ngcontent-%COMP%]{width:8rem}.button-small[_ngcontent-%COMP%]{width:24rem}.button-fill[_ngcontent-%COMP%]{background-color:#b41513;color:#fff;font-family:Myriad Light}.button-outline[_ngcontent-%COMP%]{color:#b41513;border-color:#b41513}.button-outline[_ngcontent-%COMP%]:hover{background-color:initial!important}.button-outline[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:hover{transform:translateY(.2rem);box-shadow:0 .2rem .2rem rbga(0,0,0,.25);transition:all .5s ease}.button[_ngcontent-%COMP%]:hover{background-color:#7d0000}.container[_ngcontent-%COMP%]{position:relative;width:100%;height:100vh;overflow:hidden}.header[_ngcontent-%COMP%]{z-index:1000}.videoContainer[_ngcontent-%COMP%]{position:relative;width:100%;height:100%}#myvideo[_ngcontent-%COMP%]{position:fixed;right:0;bottom:0;min-width:100%;min-height:100%;z-index:-1}.bottomContainer[_ngcontent-%COMP%]{height:12.8rem;align-items:center;justify-content:flex-end}.bottomContainer[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;display:flex}.footer[_ngcontent-%COMP%]{height:14.4rem;flex-direction:column;transform:translateY(0);transition:transform .2s ease}.footer__text[_ngcontent-%COMP%]{height:12.8rem;background-color:#f2f6f9cc;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:-1;color:#044772;padding-top:2.2rem;padding-left:4rem;font-size:2.4rem}.footer__text-light[_ngcontent-%COMP%]{font-family:Myriad Light}.progressbar[_ngcontent-%COMP%]{height:1.6rem;width:100%;background:#dee2e4cc;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);cursor:pointer;z-index:100}.progressbar-color[_ngcontent-%COMP%]{background-color:#b41513;height:100%;width:0}.footerAnimation[_ngcontent-%COMP%]{transform:translateY(12.8rem)}.buttons[_ngcontent-%COMP%]{padding-right:4rem;width:56%;z-index:1}.buttons[_ngcontent-%COMP%], .playedBtn[_ngcontent-%COMP%]{display:flex;align-items:center}.playedBtn[_ngcontent-%COMP%]{flex-grow:1}.play[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem}.playPauseBtn[_ngcontent-%COMP%]{position:relative;background:#b41513;border-radius:50%;border:none;outline:none;cursor:pointer;width:6.531rem;height:6.4rem;display:flex;justify-content:center;align-items:center;margin-right:6.565rem}.playPauseBtn[_ngcontent-%COMP%]:not(:last-child):before{content:"";position:absolute;top:0;right:-3.328rem;background-color:#00000080;width:2px;opacity:.5;border-radius:50%;height:6.4rem}.buttonGroup[_ngcontent-%COMP%]{display:flex;align-items:center}.buttonGroup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child){margin-right:1.6rem}.icon[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem}.pi-chevron-left[_ngcontent-%COMP%]{font-size:2.4rem}.rightReserved[_ngcontent-%COMP%]{font-weight:500;color:#707172;font-size:1.6rem;margin:0;font-family:Myriad Light;bottom:1.2rem}.logo[_ngcontent-%COMP%], .rightReserved[_ngcontent-%COMP%]{position:absolute;left:4rem}.logo[_ngcontent-%COMP%]{top:9.04rem;z-index:1;transform:translateY(0);transition:all .2s ease}@media screen and (max-width: 600px){.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:16rem}}.logoTop[_ngcontent-%COMP%]{transform:translateY(-6.4rem);transition:all .2s ease}.rightReservedTop[_ngcontent-%COMP%]{color:#fff;transform:translateY(-1.2rem)}.slider[_ngcontent-%COMP%]{display:flex;align-items:center;position:absolute;top:1.345rem;right:16.008rem;width:21.843rem;height:3.601rem}#speaker[_ngcontent-%COMP%]{width:3rem}.slideBar[_ngcontent-%COMP%]{margin-left:1.882rem}.pi-chevron-left[_ngcontent-%COMP%]:before{color:#b41513}  .p-slider.p-slider-horizontal{width:17.959rem;height:.846rem;background-color:#fff;box-shadow:inset 1px 1px 2px #0003}  .p-slider .p-slider-handle{background-color:#b41513;border:none;width:2.393rem;height:2.393rem;box-shadow:2px 2px 3px #0003}  .p-slider .p-slider-range{background-color:initial}  .p-slider.p-slider-horizontal .p-slider-handle{margin-top:-1.2rem;margin-left:-.2rem}  .p-slider .p-slider-handle:focus{box-shadow:none}  .p-slider:not(.p-disabled) .p-slider-handle:hover{background:#b41513;border-color:#0000}'],data:{animation:[r.q]}}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[i.Bz.forChild(_)],i.Bz]}),e})();var x=n(404);let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[o.ez,C,x.O,g.u5,l.aw,g.UX,c.JH]]}),e})()}}]);