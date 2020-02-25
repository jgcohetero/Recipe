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
  constructor(private route:ActivatedRoute,private meal:MealDBService) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.meal.getIdMeal(this.id).
    subscribe((res)=>{
      console.log(res)
    })
   }

  ngOnInit() {
  }

}
