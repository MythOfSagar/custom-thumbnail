import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-thumbnail-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  userName='MythOfSagar'
  @Input() isDarkTheme=true
}
