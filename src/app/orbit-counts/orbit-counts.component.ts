import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  numberOfType(typeOfSatellite: string): number {
    let satellitesOfType= [];
    typeOfSatellite = typeOfSatellite.toLowerCase();
    for(let i=0; i < this.satellites.length; i++) {
       let name = this.satellites[i].type.toLowerCase();
       if (name.indexOf(typeOfSatellite) >= 0) {
          satellitesOfType.push(this.satellites[i]);
       }
    }
    return satellitesOfType.length;
  }
}
