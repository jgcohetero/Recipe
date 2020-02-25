import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any;
  constructor(private router: Router, private authService: AuthService) { 
  }

  ngOnInit() {
  }
  login() {
    this.authService.loginFirebase(this.email, this.password).
      then((res) => {
        if (this.authService.isLoggedIn) {
          let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/main';
          this.router.navigateByUrl(redirect);
      }else{
        alert("Incorrect user")
      }
    });
  }
}
