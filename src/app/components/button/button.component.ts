import { Component,Input } from '@angular/core';

@Component({
  selector: 'custom-thumbnail-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() isDarkTheme = true;
  @Input() buttonLogo=''
}