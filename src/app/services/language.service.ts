import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type language = 'en' | 'es';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  // A BehaviorSubject to hold the current language ('en' or 'es')
  // It initializes with the value from localStorage or defaults to 'en'
  private languageSubject = new BehaviorSubject<language>(
    (localStorage.getItem('lang') as language) || 'en'
  );

  // Exposes the BehaviorSubject so components can subscribe to language changes
  getLanguage(): BehaviorSubject<language> {
    return this.languageSubject;
  }

  // Toggles the theme between 'es' and 'en'
  // Updates the BehaviorSubject and persists the new language in localStorage
  toggleLanguage(): BehaviorSubject<language> {
    const newLanguage = this.languageSubject.value === 'es' ? 'en' : 'es';
    this.languageSubject.next(newLanguage); // Notify subscribers of the new language
    localStorage.setItem('lang', newLanguage);

    // returns the language theme
    return this.languageSubject;
  }
}
