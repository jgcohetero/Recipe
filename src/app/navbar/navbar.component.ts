import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MealDBService } from '../services/meal-db.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any;
  displayName:any;
  email:any;
  photo:any;
  buscar:any;
  data:any;
  constructor(private authService: AuthService, private libros:MealDBService) { 
    if(this.authService.isLoggedIn=true){
      this.user = localStorage.getItem('user');
      if(JSON.parse(this.user)!=null){
        this.displayName=JSON.parse(this.user).displayName;
        this.email=JSON.parse(this.user).email;
        this.photo=JSON.parse(this.user).photoURL;
        this.user="Bienvenido " + this.displayName;
        this.user="Correo: " + this.email;
        this.user="Foto: " + this.photo;
        console.log(this.displayName);
        console.log(this.email);
        console.log(this.photo);
      }else{
        this.authService.logOut()
      }
    }
    this.data=[];
  }
  ngOnInit() {
  }
  busqueda(){
    console.log(this.buscar);
    this.libros.getMeal(this.buscar).
    subscribe((res)=>{
      console.log(res.meals);
      this.data=res.meals;
    })
  }

}
