import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealDBService } from '../services/meal-db.service';
import { FirebaseServicesService } from '../services/firebase-services.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: any;
  meals: any;
  constructor(private route: ActivatedRoute, private firebase:FirebaseServicesService) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    
  }

  ngOnInit() {
  }

}
