import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/app-header.component';
import { FooterComponent } from './footer/app-footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main class="content">
      <router-outlet></router-outlet>
    </main>
    <app-footer class="footer"></app-footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
