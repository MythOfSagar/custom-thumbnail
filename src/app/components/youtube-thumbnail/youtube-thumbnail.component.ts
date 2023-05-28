import { Component,ElementRef, OnInit, Renderer2} from '@angular/core';
import * as html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';


@Component({
  selector: 'custom-thumbnail-youtube-thumbnail',
  templateUrl: './youtube-thumbnail.component.html',
  styleUrls: ['./youtube-thumbnail.component.scss']
})

export class YoutubeThumbnailComponent implements OnInit {
  channelName: string=`yFX Studios`;
  videoTitle: string='WAR Vfx breakdown by yFX';
  views: number=362000;
  time:number=7
  videoDetailsDiv:any
  initialDetailsHeight:number=0
  initialImageHeight:number=0
  isDarkTheme:boolean=true
  period:string='days'
  selectedTopImage: string='https://mcdn.wallpapersafari.com/medium/80/68/YravwC.jpg';
  selectedBottomImage: string ='https://www.dontwasteyourmoney.com/wp-content/uploads/2020/07/best-extra-wide-pet-gate-900x400.jpeg';
  selectedChannelLogo: string ='https://yt3.googleusercontent.com/BygFhJOv7N5bikizmourxBK9KatTTEDmmtCAg-DmnikXB0fv77J_hxyPCgiRGAiTprjNKIBwNw=s176-c-k-c0x00ffffff-no-rj';
  hours:number=0
  minutes:number=3
  seconds:number=34
  showImageCropper=false
  imageChangedEvent: any = '';   
  croppedImage: any = '';
  aspectRatio:number=0
  currentImageSelection:string=''

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if(window.innerWidth<window.innerHeight){
      this.setThumbnailWidth(`${window.innerWidth}px`,'thumbnail-width');
     }else{
      this.setThumbnailWidth(`${window.innerHeight}px`,'thumbnail-width');
     }
     this.renderer.setStyle(document.body, 'background-color', '#0f0f0f');
  }

  ngAfterViewInit() {
    this.videoDetailsDiv=this.elementRef.nativeElement.querySelector('.youtube-thumbnail-details');
    this.initialDetailsHeight=this.videoDetailsDiv.offsetHeight
    this.initialImageHeight=this.elementRef.nativeElement.querySelector('.thumbnail-images').offsetHeight
  }

  recieveTheme(theme:boolean){
    this.isDarkTheme=theme
    this.isDarkTheme && this.renderer.setStyle(document.body, 'background-color', '#0f0f0f');
    !this.isDarkTheme && this.renderer.setStyle(document.body, 'background-color', '#fff');
  }


  onFileSelected(event: any,type:string) {

    if(type==='top'){
      this.aspectRatio=5.1
    }else if(type==='bottom'){
      this.aspectRatio=5.1
    }else if(type==='logo'){
      this.aspectRatio=1
    }
    this.currentImageSelection=type

    this.showImageCropper=true
    this.imageChangedEvent = event;
    const file: File = event.target.files[0] as File;
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }

  setThumbnailWidth(value:string,variable:string) {
    const styleEl = this.renderer.createElement('style');
    const css = `:root { --${variable}: ${value}; }`;
    this.renderer.appendChild(styleEl, this.renderer.createText(css));
    this.renderer.appendChild(document.head, styleEl);
  }

  downloadAsImage() {
    const div:any= document.querySelector('.youtube-thumbnail-container');
    html2canvas.default(div).then((canvas) => {
      canvas.toBlob((blob:any) => {
        saveAs(blob, 'MythOfSagar.png');
      });
    });
  }

  

  duration(){
    const seconds=this.seconds || 0
    const minutes=this.minutes || 0
       if(this.hours){
      if(minutes<10){
        return `${this.hours.toFixed(0)}:0${minutes}:${seconds}`
      }
      return `${this.hours.toFixed(0)}:${minutes}:${seconds}`
    }
    if(seconds<10){
      return `${minutes}:0${seconds}`
    }
    return `${minutes}:${seconds}`
  }

  cropImage(): void {
   
    if(this.currentImageSelection==='top'){
      this.selectedTopImage=this.croppedImage.base64
    }else if(this.currentImageSelection==='bottom'){
      this.selectedBottomImage=this.croppedImage.base64
    }else if(this.currentImageSelection==='logo'){
      this.selectedChannelLogo=this.croppedImage.base64
    }
    this.showImageCropper=false
  }
  
  readImage(file: File,type:string) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      if(type==='top'){
      
      }else if(type==='bottom'){

      }else if(type==='logo'){
  
      }
    };
    reader.readAsDataURL(file);
  }

  shortenChannelName(channelName: string):string{
    if(channelName.length>70){
      return channelName.trim().substring(0,65)+'...'
    }
    return channelName
  }



  adjustHeight(){
    const divElements = this.elementRef.nativeElement.querySelectorAll('.thumbnail-images');
    console.log( this.initialImageHeight,this.videoDetailsDiv?.offsetHeight , this.initialDetailsHeight)
    if (this.videoDetailsDiv?.offsetHeight !== this.initialDetailsHeight) {
      divElements.forEach((divElement: HTMLElement) => {
        this.renderer.setStyle(
          divElement,
          'height',
          `${
            this.initialImageHeight -
            (this.videoDetailsDiv?.offsetHeight - this.initialDetailsHeight) / 2
          }px`
        );
      });
    }else{
      divElements.forEach((divElement: HTMLElement) => {
        this.renderer.setStyle(
          divElement,
          'height',
          `${
            this.initialImageHeight
          }px`
        );
      });
    }
  }

  readableViews(number: number): string {
    const trillion = 1000000000000;
    const billion = 1000000000;
    const million = 1000000;
    const thousand = 1000;

    if(!number) number =0

    if (number >= trillion) {
      const views = (number / trillion).toFixed(1);
      if(views.split('.')[1]=='0')
      {
        return views.slice(0,-2) + 'T' +' '+'views';
      }
      return views + 'T' +' '+'views';
    }
    else if (number >= billion) {
      const views = (number / billion).toFixed(1);
      if(views.split('.')[1]=='0')
      {
        return views.slice(0,-2) + 'B' +' '+'views';
      }
      return views + 'B' +' '+'views';
    } else if (number >= million) {
      const views = (number / million).toFixed(1);
      if(views.split('.')[1]=='0')
      {
        return views.slice(0,-2) + 'M' +' '+'views';
      }
      return views + 'M'+' '+'views';
    } else if (number >= thousand) {
      const views = (number / thousand).toFixed(1);
      if(views.split('.')[1]=='0')
      {
        return views.slice(0,-2) + 'K' +' '+'views';
      }
      return views + 'K'+' '+'views';
    } else if(number===1){
      return number+' '+'view';
    }
    else {
  
      return number.toString()+' '+'views';
    }
  }


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(image:any): void {
    this.croppedImage = image;
  }

  imageLoaded(): void {
    // Image loaded callback
  }

  cropperReady(): void {
    // Cropper ready callback
  }

  loadImageFailed(): void {
    // Error handling for image load failure
  }

 
}

