import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    protected authService: AuthService,
    public router: Router,

  ) { }

  ngOnInit() {
  }

  loginWithGoogle() {

    this.authService.loginWithGoogle();
    this.router.navigateByUrl('/user-Info');


  }
}
