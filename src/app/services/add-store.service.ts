import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Store, Setup } from '../models/stores.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AddStoreService {

  store: Store;
  storeCollectionRef = this.afs.collection("stores");

  step = 1;

  constructor(
    protected afs: AngularFirestore,
    protected auth: AuthService,

  ) {
    this.store = {
      contact: {
        name: '',
        position: '',
      },
      floorSetting: new Array<Setup>(),
      location: '',
      makeReservations: true,
      storeProfile: {
        name: '',
        cellNumber: '',
        avatarUrl: 'https://c1.staticflickr.com/8/7459/11536816066_d1acaf5579_b.jpg',
      }
      // , tradingHours: ""
      , establishmentType: ''
      , slogan: ''
      , storeOwner:''
      , employees: new Array()
      , reviewsRatings: new Array()
    }

  }

  getData() {
    return this.storeCollectionRef.get().toPromise().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  });
  }

  registerStore(store: Store) {
    this.store = store;
    this.store.storeOwner = this.auth.getcurrentUser().displayName
    this.storeCollectionRef
      .doc(this.store.storeProfile.name)
      .set(Object.assign({}, this.store))
      .then(function (docRef) {
        console.log("store registered!");
      })
      .catch(function (error) {
        console.error("Error adding store: ", error);
      });
  }
}
