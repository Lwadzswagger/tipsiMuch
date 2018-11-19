import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

// export class User{
//   displayName?: string
//   uid?:string
//   avatar?:string
//   hasAStore?:boolean
//   nickname?:string
// }

export class AuthService {

  constructor(
    
    public afAuth: AngularFireAuth,
    public router: Router,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
  ) { }
  loginWithGoogle() {
    this.afAuth.auth
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(() => {
    // this.afAuth.auth.currentUser
      this.router.navigate(['/']);
     })
    .catch(error => this.handleError(error));
 
}
  // If any error, console log and notifying the user of such
  private handleError(error: Error) {
    console.error(error);
  }

  isLoggedIn() {
    const visitor = firebase.auth().currentUser;
    console.log(firebase.auth().currentUser);
    if (visitor === null) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.afAuth.auth.signOut().then(res => this.router.navigate(['/']));
  }

  getcurrentUser() {
    return firebase.auth().currentUser;
  }
}
