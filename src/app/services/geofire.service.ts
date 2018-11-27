import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { GeoFire } from 'geofire';
import { BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class GeofireService {

  dbRef: any;
  geoFire: any;
  hits = new BehaviorSubject([]);



  constructor(protected db: AngularFireDatabase) {
    this.dbRef = this.db.list('/locations');
    this.geoFire = new GeoFire(this.dbRef.$ref);

  }

  setlocation(key: string, coords: Array<number>) {
    this.geoFire.set(key, coords)
      .then(_ => console.log('location udated'))
      .catch(err => console.log(err));
  }

  getLocation(radius: number, coords: Array<number>) {
    this.geoFire.query({
      center: coords,
      radius: radius
    })
      .on('key_entered', (key, location, distance) => {
        // tslint:disable-next-line:prefer-const
        let hit = {
          location: location,
          distance: distance
        };

        // tslint:disable-next-line:prefer-const
        let currentHits = this.hits.value;
        currentHits.push(hit);
        this.hits.next(currentHits)
      });


  }
}
