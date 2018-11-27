import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
userData;
  constructor(
    protected auth: AuthService,
    protected router: Router,
    ) { }

  ngOnInit() {
  }
user() {
this.auth.newUser(this.userData);

}
}
