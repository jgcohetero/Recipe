import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealDBService {
  data: any;
  meals: any;
  constructor(private http: HttpClient) { }
  proxy = 'https://cors-anywhere.herokuapp.com/';
  getMeal(nombre: any): any {

    this.data = this.http.get(`${this.proxy}https://www.themealdb.com/api/json/v1/1/search.php?s=${nombre}`);
    console.log(this.data)
    return this.data;
  }
  getIdMeal(id: any): any {
    this.data = this.http.get(`${this.proxy}https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    console.log(this.data)
    return this.data;
  }
    getInicio(): any {
     this.meals = this.http.get(`${(this.proxy)}https://www.themealdb.com/api/json/v1/1/search.php?f=f`);
     console.log(this.meals);
     return this.meals
  }

}
