import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-locations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="listing-photo" 
        [src]="housingLocation.photo" 
        alt="Exterior Photos of {{housingLocation.name}}">
      <h2 class="listing-title">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state}}</p>
    </section>
  `,
  styleUrls: ['./housing-locations.component.css']
})
export class HousingLocationsComponent {
  @Input() housingLocation!: HousingLocation
}
