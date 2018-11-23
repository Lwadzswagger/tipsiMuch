import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StoreUtilsService {
  storeCollectionRef = this.afs.collection('menu');



  constructor(
    protected afs: AngularFirestore,
    protected auth: AuthService,
  ) { }
  saveMenu( storename) {

    // this.storeCollectionRef
    // .doc(storename)
    // .set(Object.assign({},  this.tables  ))
    // .then(function (docRef) {
    //   console.log('menu registered successfully! ');
    // })
    // .catch(function (error) {
    //   console.error('Error adding menu: ', error);
    // });
  }
}
