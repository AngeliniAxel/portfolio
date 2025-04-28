import { Component, inject } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeService } from './services/theme.service';
import { Subscription } from 'rxjs';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { HeroComponent } from './components/hero/hero.component';
import { LanguageService } from './services/language.service';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  themeService = inject(ThemeService);
  languageService = inject(LanguageService);

  // Subscription to listen for theme and language changes
  private themeSubscription!: Subscription;
  private languageSubscription!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subscribeToThemeChanges();
    this.subscribeToLanguageChanges();
  }

  subscribeToThemeChanges() {
    this.themeSubscription = this.themeService.getTheme().subscribe((theme) => {
      document.body.className = theme; // Updates the <body> class to reflect the current theme
    });
  }

  subscribeToLanguageChanges() {
    this.languageSubscription = this.languageService
      .getLanguage()
      .subscribe((language) => {
        this.translate.use(language); // Updates the translation language
        document.documentElement.lang = language; // Updates the <html> lang attribute for accessibility
      });
  }

  ngOnDestroy() {
    // Unsubscribes from the theme observable to prevent memory leaks
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }

    // Unsubscribes from the language observable to prevent memory leaks
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}
