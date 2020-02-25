import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealDBService } from '../services/meal-db.service';

@Component({
  selector: 'app-view-repice',
  templateUrl: './view-repice.component.html',
  styleUrls: ['./view-repice.component.css']
})
export class ViewRepiceComponent implements OnInit {
id:any;
meals:any;
  constructor(private route:ActivatedRoute,private meal:MealDBService) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.search(this.id);
   }

   async search(id:any){
    await this.meal.getIdMeal(id).
    subscribe((res)=>{
      this.meals=res.meals;
      console.log(this.meals)
    })
   }
  ngOnInit() {
  
  }


}
