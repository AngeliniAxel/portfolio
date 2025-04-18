import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // A BehaviorSubject to hold the current theme ('light' or 'dark')
  // It initializes with the value from localStorage or defaults to 'dark'
  private themeSubject = new BehaviorSubject<Theme>(
    (localStorage.getItem('theme') as Theme) || 'dark'
  );

  // Exposes the BehaviorSubject so components can subscribe to theme changes
  getTheme(): BehaviorSubject<Theme> {
    return this.themeSubject;
  }

  // Toggles the theme between 'light' and 'dark'
  // Updates the BehaviorSubject and persists the new theme in localStorage
  toggleTheme(): void {
    const newTheme = this.themeSubject.value === 'light' ? 'dark' : 'light';
    this.themeSubject.next(newTheme); // Notify subscribers of the new theme
    localStorage.setItem('theme', newTheme);
  }
}
