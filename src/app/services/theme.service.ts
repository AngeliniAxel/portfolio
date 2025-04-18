import { Injectable } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme: Theme = 'light';

  getTheme(): Theme {
    return this.currentTheme;
  }

  toggleTheme(): void {
    this.currentTheme === 'light' ? 'dark' : 'light';
  }
}
