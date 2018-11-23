import { Component, OnInit } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})
export class GooglemapsComponent implements OnInit {
  lat: number;
  lng: number;

  constructor() { }

  ngOnInit() {
    this.getUserLocation();
  }

  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(this.lat, this.lng);
      });
    }
  }
}
