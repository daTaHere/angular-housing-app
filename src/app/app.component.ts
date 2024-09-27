import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HousingLocationsComponent } from './housing-locations/housing-locations.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent,HousingLocationsComponent],
})
export class AppComponent {
  title = 'homes';
}
