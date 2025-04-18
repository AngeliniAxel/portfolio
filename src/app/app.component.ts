import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeService } from './services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  themeService = inject(ThemeService);
  private themeSubscription!: Subscription; // Subscription to listen for theme changes

  ngOnInit() {
    // Subscribes to the theme changes from the ThemeService
    this.themeSubscription = this.themeService.getTheme().subscribe((theme) => {
      document.body.className = theme; // Updates the <body> class to reflect the current theme
    });
  }

  ngOnDestroy() {
    // Unsubscribes from the theme observable to prevent memory leaks
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
