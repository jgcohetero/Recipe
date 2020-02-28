import { Component, OnInit } from '@angular/core';
import { MealDBService } from '../services/meal-db.service';
import { FirebaseServicesService } from '../services/firebase-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  buscar: any;
  data: any;
  meals: any;
  constructor(private meal: MealDBService, private houseIoTService: FirebaseServicesService, private router: Router) {
    this.data = [];
    this.meals = [];
    this.meal.getInicio().subscribe((res) => {
      console.log(res.meals);
      this.meals = res.meals
    })
  }

  ngOnInit() {
  }
  busqueda() {
    console.log(this.buscar);

    this.meal.getMeal(this.buscar).
      subscribe((res) => {
        console.log(res.meals);
        this.data = res.meals;
        if(this.data.length = null){
          console.log(this.data)
        }else{
          alert("success")
        }
      });


  }
  getInicioMain() {
    this.meal.getInicio().subscribe((res) => {
      console.log(res.meals);
      var p = res.meals.strMeal;
      this.meals = res.meals
    })
  }
  metodo() {
    console.log(localStorage.getItem('user'))
    alert("No existe la receta " + this.buscar)
  }
  subir(titulo: any, categoria: any, ingredientes: any, id: any, pasos: any, img: any) {
    this.houseIoTService.insertNew(titulo, categoria, ingredientes, id, pasos, img);
    this.router.navigate(['/recetas']);
  }

}
