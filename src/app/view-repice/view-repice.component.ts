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
<<<<<<< Updated upstream
meals:any;
=======
mealsId:any;
>>>>>>> Stashed changes
  constructor(private route:ActivatedRoute,private meal:MealDBService) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.search(this.id);
   }

   async search(id:any){
    await this.meal.getIdMeal(id).
    subscribe((res)=>{
<<<<<<< Updated upstream
      this.meals=res.meals;
      console.log(this.meals)
=======
      var jsonArray = JSON.parse(JSON.stringify(res))
      console.log(jsonArray)
>>>>>>> Stashed changes
    })
   }
  ngOnInit() {
<<<<<<< Updated upstream
  
  }

=======
    this.getRecetaId()
  }

  async getRecetaId(){
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id)
   await this.meal.getIdMeal(this.id).
    subscribe((res)=>{
      // console.log(res)
      this.mealsId = res.meals;
      // console.log(this.mealsId)
    })
  }

>>>>>>> Stashed changes

}
