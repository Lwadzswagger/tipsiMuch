import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
hasStore;
  constructor(
    public router: Router,
    public auth: AuthService,
    public cache: CacheService,
  ) {


  }

  home() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }
  logout() {
    this.auth.logout();
  }

  viewProfile() {
    window.alert(this.cache.currentUser);
    // console.log(
    // this.auth.userExist();
    // );

  }
}
