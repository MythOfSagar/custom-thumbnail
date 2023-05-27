import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'custom-thumbnail-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss'],
})
export class ToggleThemeComponent {
  @Output() emittTheme: EventEmitter<boolean> = new EventEmitter<boolean>();
  isDarkTheme = true;
  themeIcon = 'https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg';

  setTheme(): void {
      this.themeIcon = this.isDarkTheme
        ? 'https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg'
        : 'https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg';
      this.isDarkTheme = !this.isDarkTheme;
      this.emittTheme.emit(this.isDarkTheme);
  }
}
