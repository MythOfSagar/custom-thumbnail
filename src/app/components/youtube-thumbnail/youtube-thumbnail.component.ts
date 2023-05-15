import { Component,Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'custom-thumbnail-youtube-thumbnail',
  templateUrl: './youtube-thumbnail.component.html',
  styleUrls: ['./youtube-thumbnail.component.scss']
})

export class YoutubeThumbnailComponent {
  channelName: string='The Military Show';
  @Input() channelLogoUrl: string='';
  videoTitle: string='Why Russia is Running out of Tanks';
  views: number=1;
  @Input() thumbnailUrl: string='';
  @Input() videoLength: string='';
  time:number=10
  period:String='days'
  constructor(){
  }

  selectedTopImage: string | undefined;
  selectedBottomImage: string | undefined;
  selectedChannelLogo: string | undefined;


  onFileSelected(event: any,type:string) {
    const file: File = event.target.files[0] as File;
    this.readImage(file,type);
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
      return number.toString()+' '+'views';
    }
  }
}

