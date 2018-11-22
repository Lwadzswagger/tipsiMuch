import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  public user$: Observable<firebase.User>;

  User = {
    displayName: '',
    uid: '',
    email: '',
    avatar: '',
    hasAStore: false,
    nickname: '',
    notification: new Array()
  };

  firestoreUsersRef;
  firestoreUser;

  constructor(

    public afAuth: AngularFireAuth,
    public router: Router,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
  ) {
    this.user$ = afAuth.authState;
    this.firestoreUsersRef = this.afs.collection('users').valueChanges();
    this.firestoreUser = this.afs.collection('users');
  }

  loginWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        console.log(this.getcurrentUser());
        this.router.navigate(['/']);
      })
      .catch(error => this.handleError(error));

  }
  // If any error, console log and notifying the user of such
  private handleError(error: Error) {
    console.error(error);
  }

  userExist() {

    if (this.firestoreUser.doc(this.getcurrentUser().uid) === undefined) {
      return false;
    } else {
      return true;
    }
  }

  newUser(nickname) {
    this.User.avatar = this.getcurrentUser().photoURL;
    this.User.displayName = this.getcurrentUser().displayName;
    this.User.email = this.getcurrentUser().email;
    this.User.uid = this.getcurrentUser().uid;
    this.User.hasAStore = false;
    this.User.nickname = nickname;
    this.firestoreUser.doc(this.getcurrentUser().uid)
      .set(Object.assign({}, this.User))
      .then(function (docRef) {
        console.log('User registered!');
      })
      .catch(function (error) {
        console.error('Error adding store: ', error);
      });
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
