import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  currentTheme = '';
  currentLanguage: string = 'en';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    // Initializes the current theme from the ThemeService
    this.currentTheme = this.themeService.getTheme().value;

    // Initializes the current language from localStorage or defaults to 'en'
    this.currentLanguage = localStorage.getItem('lang') || 'en';

    // Sets the initial language for ngx-translate
    this.translate.use(this.currentLanguage);

    // Updates the <html> element's lang attribute for accessibility
    document.documentElement.lang = this.currentLanguage;
  }

  toggleTheme() {
    // Toggle the theme using ThemeService and update local state
    this.currentTheme = this.themeService.toggleTheme().value;
  }

  toggleLanguage() {
    // Toggle between English and Spanish
    this.currentLanguage = this.currentLanguage === 'en' ? 'es' : 'en';

    // Update ngx-translate language
    this.translate.use(this.currentLanguage);

    // Persist selected language in localStorage
    localStorage.setItem('lang', this.currentLanguage);

    // Update the <html> tag's lang attribute accordingly
    document.documentElement.lang = this.currentLanguage;
  }
}
