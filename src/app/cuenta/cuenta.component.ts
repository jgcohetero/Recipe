import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  public email: string;
  public password: string;

  ngOnInit() {
  }
  onAddUser() {
    this.authService.registrarUsuario(this.email, this.password).
      then((res) => {
        this.router.navigate(['/main']);
      }).catch(err => console.log('err', err.message));
  }

}
