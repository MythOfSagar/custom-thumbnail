import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeThumbnailComponent } from './components/youtube-thumbnail/youtube-thumbnail.component';
import { FormsModule } from '@angular/forms';
import { ToggleThemeComponent } from './components/toggle-theme/toggle-theme.component';
import { FooterComponent } from './components/footer/footer.component';
import { DownloadButtonComponent } from './components/download-button/download-button.component';


@NgModule({
  declarations: [
    AppComponent,
    YoutubeThumbnailComponent,
    ToggleThemeComponent,
    FooterComponent,
    DownloadButtonComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
