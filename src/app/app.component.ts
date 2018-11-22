import { Component, OnInit, } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    protected auth: AuthService,
    protected router: Router
  ) { }

  ngOnInit() {
    if (this.auth.user$) {
      console.log('not logged in');

      if (this.auth.userExist()) {
        console.log('logged in but not registered');

        this.router.navigate(['/user-Info']);
      } else {
        console.log('logged in and registered');

        this.router.navigate(['/']);
      }
    }

  }
}
