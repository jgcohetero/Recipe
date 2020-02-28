import { Component, OnInit } from '@angular/core';
import { FirebaseServicesService } from '../services/firebase-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-recipe-firebase',
  templateUrl: './view-recipe-firebase.component.html',
  styleUrls: ['./view-recipe-firebase.component.css']
})
export class ViewRecipeFirebaseComponent implements OnInit {
  id: any;
  recipe:any;
  ingredientes: any;
  pasos: any
  constructor(private route: ActivatedRoute, private firebase:FirebaseServicesService) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.search(this.id);
  }
  ngOnInit() {
  }
  async search(id:any){
    await this.firebase.viewRecipe(id).
    subscribe((res)=>{
      this.recipe=res;
      this.ingredientes=this.recipe.ingredientes;
      this.pasos=this.recipe.pasos;
    })
  }
}
