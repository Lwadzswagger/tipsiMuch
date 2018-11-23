import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router/src/router_state';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private router: Router,
    private authservice: AuthService
  ) { }

  canActivate(state: RouterStateSnapshot) {
return this.authservice.user$.pipe(map(user => {
if (user) {return true;
} else {
  this.router.navigate(['/sign-in'],
  //  {queryParams: {returnUrl: state.url}  }
    ) ;
  return false; }
}));
 }





}
