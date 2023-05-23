import { Component,ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'custom-thumbnail-youtube-thumbnail',
  templateUrl: './youtube-thumbnail.component.html',
  styleUrls: ['./youtube-thumbnail.component.scss']
})

export class YoutubeThumbnailComponent implements OnInit {
  channelName: string=`SRK`;
  videoTitle: string='Shah Rukh Khan, the King of Bollywood';
  views: number=1;
  time:number=10
  videoDetailsDiv:any
  initialDetailsHeight:number=0
  initialImageHeight:number=0
  isDarkTheme:boolean=true
  period:String='days'
  selectedTopImage: string='https://mcdn.wallpapersafari.com/medium/80/68/YravwC.jpg';
  selectedBottomImage: string ='https://www.dontwasteyourmoney.com/wp-content/uploads/2020/07/best-extra-wide-pet-gate-900x400.jpeg';
  selectedChannelLogo: string ='https://yt3.googleusercontent.com/FU332R7JMjZaRm1YGvk8NnHJ1C9zW_yLpXz0GkHqGXV0bDRaAuulxt7s2TEJkN05FojDn2I5JuU=s176-c-k-c0x00ffffff-no-rj';
  hours:number=0
  minutes:number=22
  seconds:number=6
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if(window.innerWidth<window.innerHeight){
      this.setThumbnailWidth(`${window.innerWidth}px`,'thumbnail-width');
     }else{
      this.setThumbnailWidth(`${window.innerHeight}px`,'thumbnail-width');
     }
  }

  ngAfterViewInit() {
    this.videoDetailsDiv=this.elementRef.nativeElement.querySelector('.youtube-thumbnail-details');
    this.initialDetailsHeight=this.videoDetailsDiv.offsetHeight
    this.initialImageHeight=this.elementRef.nativeElement.querySelector('.thumbnail-images').offsetHeight
  }


  onFileSelected(event: any,type:string) {
    const file: File = event.target.files[0] as File;
    this.readImage(file,type);
  }

  setThumbnailWidth(value:string,variable:string) {
    const styleEl = this.renderer.createElement('style');
    const css = `:root { --${variable}: ${value}; }`;
    this.renderer.appendChild(styleEl, this.renderer.createText(css));
    this.renderer.appendChild(document.head, styleEl);
  }

  setBackgroundUsingVariable(color: string) {
    const css = `:root { --background-color: ${color}; }`;
    this.renderer.setStyle(document.documentElement, 'background-color', `var(--background-color)`);
    this.renderer.appendChild(document.head, this.renderer.createText(css));
  }
  
  

  duration(){
    if(this.hours){
      if(this.minutes<10){
        return `${this.hours.toFixed(0)}:0${this.minutes}:${this.seconds}`
      }
      return `${this.hours.toFixed(0)}:${this.minutes}:${this.seconds}`
    }
    if(this.seconds<10){
      return `${this.minutes}:0${this.seconds}`
    }
    return `${this.minutes}:${this.seconds}`
  }

  
  readImage(file: File,type:string) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      if(type==='top'){
        this.selectedTopImage = event.target.result;
      }else if(type==='bottom'){
        this.selectedBottomImage = event.target.result;
      }else if(type==='logo'){
        this.selectedChannelLogo = event.target.result;
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
    }
  }

  readableViews(number: number): string {
    const billion = 1000000000;
    const million = 1000000;
    const thousand = 1000;


    if (number >= billion) {
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
      if(!number) number =1
      return number.toString()+' '+'views';
    }
  }
}

