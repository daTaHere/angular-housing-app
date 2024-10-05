import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationsComponent } from '../housing-locations/housing-locations.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationsComponent],
  template: `
    <form>
      <input type="text" placeholder="filter by city">
      <button class="primary" type="butt">Search</button>
    </form>
    <section class="results">
      <app-housing-locations 
      *ngFor="let housingLocation of housingLocationList"
      [housingLocation]="housingLocation"></app-housing-locations>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList:HousingLocation[] = [];
  housingServices:HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingServices.getAllHousingLocations();
  };
}
