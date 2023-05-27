import { Component, Input} from '@angular/core';

@Component({
  selector: 'custom-thumbnail-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.scss']
})
export class DownloadButtonComponent {
  @Input() isDarkTheme = true;
}
