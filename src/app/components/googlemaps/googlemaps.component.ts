import { Component, OnInit } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';
import { GeofireService } from '../../services/geofire.service';



@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})
export class GooglemapsComponent implements OnInit {
  lat: number;
  lng: number;
  markers: any;


  constructor(public geo: GeofireService) { }

  ngOnInit() {
    this.getUserLocation();
    this.geo.hits
      .subscribe(hits => (this.markers = hits));
  }

  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.geo.getLocation(500, [this.lat, this.lng]);
      });
    }
  }
}
