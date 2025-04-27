import { LanguageService } from './../../services/language.service';
import { Component, HostListener, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'navbar',
  imports: [TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  languageService = inject(LanguageService);
  currentTheme = '';
  currentLanguage = '';
  isScrolled: boolean = false; // Tracks if the page is scrolled

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    // Initializes the current theme from the ThemeService
    this.currentTheme = this.themeService.getTheme().value;

    // Initializes the current language from the LanguageService
    this.currentLanguage = this.languageService.getLanguage().value;

    // Sets the initial language for ngx-translate
    this.translate.use(this.currentLanguage);
  }

  toggleTheme() {
    // Toggle the theme using ThemeService
    this.currentTheme = this.themeService.toggleTheme().value;
  }

  toggleLanguage() {
    // Toggle language using LanguageService
    this.currentLanguage = this.languageService.toggleLanguage().value;
  }

  // Listen to the scroll event to detect if the page is scrolled
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 0; // Set to true if scrolled, false otherwise
  }
}
