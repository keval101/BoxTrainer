(self.webpackChunkonline_box_trainer=self.webpackChunkonline_box_trainer||[]).push([[635],{635:(e,o,t)=>{"use strict";t.r(o),t.d(o,{ChooseScreenshotModule:()=>v});var n=t(8583),r=t(5035),c=t(639),s=t(9790),i=t(7441),a=t(5610),l=t(7451),h=t(566),u=t(3013);function p(e,o){1&e&&c._UZ(0,"img",12),2&e&&c.Q6J("src",o.$implicit,c.LSH)}const b=[{path:"",component:(()=>{class e{constructor(e,o,t,n){this.TranslateService=e,this.router=o,this.choosescreenshotService=t,this.takescreenshotService=n,this.items=[],this.recording=!1,this.isScreenShot=!1,this.responsiveOptions=[{breakpoint:"1024px",numVisible:1,numScroll:3},{breakpoint:"768px",numVisible:1,numScroll:2},{breakpoint:"560px",numVisible:1,numScroll:1}]}ngOnInit(){this.isScreenShot=!0,this.recording=!0,this.items=this.takescreenshotService.captures}backToScreenShot(){this.choosescreenshotService.backToScreen=!0,this.router.navigate(["/takescreenshot"])}redirectTo(){this.router.navigate(["/self-assesment"])}}return e.\u0275fac=function(o){return new(o||e)(c.Y36(s.sK),c.Y36(r.F0),c.Y36(i.u),c.Y36(a.Q))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-choose-screenshot"]],decls:17,vars:10,consts:[[1,"header"],[3,"onFinishRecording","onScreenShot"],[1,"chooseScreenshot"],[1,"carousel-images"],[3,"value","numVisible","responsiveOptions"],["pTemplate","item"],[1,"chooseScreenshot__bottom"],[1,"chooseScreenshot__bottom--text"],[1,"chooseScreenshot__bottom--group"],[1,"button","button-exSmall","button-outline","backBtn",3,"click"],[1,"pi","pi-chevron-left"],[1,"button","button-big","button-fill","backBtn",3,"click"],[1,"screenShotImage",3,"src"]],template:function(e,o){1&e&&(c.TgZ(0,"div",0),c._UZ(1,"app-header",1),c.qZA(),c.TgZ(2,"div",2),c.TgZ(3,"div",3),c.TgZ(4,"p-carousel",4),c.YNc(5,p,1,1,"ng-template",5),c.qZA(),c.qZA(),c.TgZ(6,"div",6),c.TgZ(7,"div",7),c.TgZ(8,"p"),c._uU(9),c.ALo(10,"translate"),c.qZA(),c.qZA(),c.TgZ(11,"div",8),c.TgZ(12,"button",9),c.NdJ("click",function(){return o.backToScreenShot()}),c._UZ(13,"i",10),c.qZA(),c.TgZ(14,"button",11),c.NdJ("click",function(){return o.redirectTo()}),c._uU(15),c.ALo(16,"translate"),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(1),c.Q6J("onFinishRecording",o.recording)("onScreenShot",o.isScreenShot),c.xp6(3),c.Q6J("value",o.items)("numVisible",1),c.xp6(5),c.Oqu(c.lcZ(10,6,"chooseScreenshot.chooseResult")),c.xp6(6),c.hij(" ",c.lcZ(16,8,"chooseScreenshot.chooseBtn")," "))},directives:[l.G,h.l,u.jx],pipes:[s.X$],styles:['@charset "UTF-8";.button[_ngcontent-%COMP%]{height:4.8rem;border-radius:.5rem;font-size:2.4rem;background:#0000;border:.2rem solid #0000;cursor:pointer;font-weight:500;display:flex;justify-content:center;align-items:center}.button-big[_ngcontent-%COMP%]{width:32rem}.button-exSmall[_ngcontent-%COMP%]{width:8rem}.button-small[_ngcontent-%COMP%]{width:24rem}.button-fill[_ngcontent-%COMP%]{background-color:#b41513;color:#fff;font-family:Myriad Light}.button-outline[_ngcontent-%COMP%]{color:#b41513;border-color:#b41513}.button-outline[_ngcontent-%COMP%]:hover{background-color:initial!important}.button-outline[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:hover{transform:translateY(.2rem);box-shadow:0 .2rem .2rem rbga(0,0,0,.25);transition:all .5s ease}.button[_ngcontent-%COMP%]:hover{background-color:#7d0000}  .p-carousel .p-carousel-content .p-carousel-prev{position:absolute;width:6.4rem;height:6.4rem;border-radius:50%;background-color:#b41513;margin:0 0 0 -5px;opacity:1;z-index:1}  .p-carousel .p-carousel-content .p-carousel-next{position:absolute;width:6.4rem;height:6.4rem;border-radius:50%;background-color:#b41513;margin:0 0 0 -5px;opacity:1;z-index:1}  .pi-chevron-right:before{content:"\ue901";font-size:2.4rem;color:#fff}  .pi-chevron-left:before{content:"\ue900";font-size:2.4rem;color:#fff}  .p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button{background-color:#b41513;box-shadow:0 .2rem .4rem #0003}  .p-carousel .p-carousel-indicators .p-carousel-indicator button{background-color:#dee2e4;width:1.6rem;height:1.6rem;transition:background-color .2s,color .2s,box-shadow .2s;border-radius:50%;box-shadow:inset 0 .1rem .2rem #00000040}  .p-carousel .p-carousel-content .p-carousel-next:enabled:hover,   .p-carousel .p-carousel-content .p-carousel-prev:enabled:hover{background:#b41513}  .p-carousel .p-carousel-content .p-carousel-next:focus,   .p-carousel .p-carousel-content .p-carousel-prev:focus{box-shadow:none}.header[_ngcontent-%COMP%]{z-index:20}.chooseScreenshot[_ngcontent-%COMP%]{position:absolute;top:0;width:100%;height:100vh;overflow:hidden;z-index:-1}.chooseScreenshot__bottom[_ngcontent-%COMP%]{display:flex;position:absolute;justify-content:space-between;align-items:center;bottom:0;background-color:#f3f4f4b3;width:100%;height:14rem;padding:0 4rem}.chooseScreenshot__bottom[_ngcontent-%COMP%]   .carousel-images[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.chooseScreenshot__bottom--text[_ngcontent-%COMP%]{font-size:3.2rem;color:#b41513}@media screen and (max-width: 375px){.chooseScreenshot__bottom--text[_ngcontent-%COMP%]{font-size:2.2rem}}.chooseScreenshot__bottom--group[_ngcontent-%COMP%]{display:flex}.chooseScreenshot__bottom--group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0}.chooseScreenshot__bottom[_ngcontent-%COMP%]   .backBtn[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.chooseScreenshot__bottom[_ngcontent-%COMP%]   .pi-chevron-left[_ngcontent-%COMP%]:before{text-align:center;color:#b41513}.chooseScreenshot__bottom--group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child){margin-right:1.6rem}.screenShotImage[_ngcontent-%COMP%]{width:100%;height:100vh;object-fit:cover}  .p-carousel .p-carousel-content .p-carousel-prev{top:47%;left:4rem}  .p-carousel .p-carousel-content .p-carousel-next{top:47%;right:4rem}  .p-carousel .p-carousel-indicators{position:absolute;bottom:10rem;left:50%;z-index:1}@media screen and (max-width: 600px){  .p-carousel .p-carousel-indicators{bottom:9rem}}']}),e})()}];let d=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.Bz.forChild(b)],r.Bz]}),e})();var g=t(3679),m=t(404),_=t(4207),f=t(7965),S=t(4748);let v=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[n.ez,g.u5,h.b,_.hJ,f.EV,S.LU,m.O,d,s.aw]]}),e})()}}]);