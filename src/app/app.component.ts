import { Component } from '@angular/core';

@Component({
  selector: 'custom-thumbnail-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-thumbnail';
  channelName="The Military Show"
  channelLogoUrl="https://yt3.googleusercontent.com/ytc/AGIKgqM0AHIhgaTvM-S6etdmyxZhOovaDnJ2948_ePxM=s176-c-k-c0x00ffffff-no-rj-mo"
  videoTitle="Why Russia is Running out of Tanks"
  views=623
  publishedDate="3 days ago"
  thumbnailUrl="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTK7Os2YW_6OfJJGh9rvPUSbNYqUwQXZce6mMIrqMasLen8sg4BDbHwN-UMOAV6Q_lXdvqdhbY-NqCTcGA"
  videoLength="videoLength"
}
