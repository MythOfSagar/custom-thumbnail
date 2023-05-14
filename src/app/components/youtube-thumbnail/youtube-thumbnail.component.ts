import { Component,Input } from '@angular/core';

@Component({
  selector: 'custom-thumbnail-youtube-thumbnail',
  templateUrl: './youtube-thumbnail.component.html',
  styleUrls: ['./youtube-thumbnail.component.scss']
})
export class YoutubeThumbnailComponent {
  @Input() channelName: string='';
  @Input() channelLogoUrl: string='';
  @Input() videoTitle: string='';
  @Input() views: number=1;
  @Input() publishedDate: string='';
  @Input() thumbnailUrl: string='';
  @Input() videoLength: string='';

  constructor(){
  }

  selectedTopImage: string | undefined;
  selectedBottomImage: string | undefined;

  onFileSelected(event: any,position:string) {
    const file: File = event.target.files[0] as File;
    this.readImage(file,position);
  }

  readImage(file: File,position:string) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      if(position==='top'){
        this.selectedTopImage = event.target.result;
      }else if(position==='bottom'){
        this.selectedBottomImage = event.target.result;
      }
    };
    reader.readAsDataURL(file);
  }

  // uploadImage() {
  //   if (this.selectedTopImage) {
  //     console.log('Selected image:', this.selectedTopImage);
  //   }
  // }
}