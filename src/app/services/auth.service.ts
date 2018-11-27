import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { CacheService } from './cache.service';

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
    notification: new Array(),
    tables: '',
    history: new Array()
  };

  firestoreUsersRef;
  firestoreUser;

  constructor(

    public afAuth: AngularFireAuth,
    public router: Router,
    public cache: CacheService,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
  ) {
    this.user$ = afAuth.authState;
    // this.firestoreUsersRef = this.afs.collection('users').valueChanges();
    this.firestoreUser = this.afs.collection('users');
  }

  loginWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {

        this.cache.currentUser = this.getDBCurrentUser().subscribe(res => {
          this.cache.currentUser = res;
          localStorage.setItem('currentuser', JSON.stringify(res));
        });
        // this.userExist();
    //  if (this.userExist()) {
      //  console.log(this.getcurrentUser().uid);
      //  console.log('user does not exist');
    //  } else {
    // console.log('user exist');
    // }
        // this.router.navigate(['/']);
      })
      .catch(error => this.handleError(error));

  }
  // If any error, console log and notifying the user of such
  private handleError(error: Error) {
    console.error(error);
  }

  userExist() {
  const usersRef = this.firestoreUser.doc(this.getcurrentUser().uid) ;
       return usersRef.get()
        .subscribe((docSnapshot) => {
          if (docSnapshot.exists) {
            usersRef.onSnapshot((doc) => {
              doc.data();
            });
          } else {
             console.log('user does not exist ');
            // usersRef.set({...}) // create the document
          }
      });
  }

updateUserHasAstore() {
  this.firestoreUser.doc(this.getcurrentUser().uid).update({hasAStore: true}).then(function (docRef) {
    console.log('User updated!');
  })
  .catch(function (error) {
    console.error('Error updating userData: ', error);
  });
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
      this.router.navigateByUrl('/');
  }

  isLoggedIn() {
    const visitor = firebase.auth().currentUser;
    // console.log(firebase.auth().currentUser);
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

  getDBCurrentUser() {
    return this.firestoreUser.doc(this.afAuth.auth.currentUser.uid).valueChanges();
  }
}
