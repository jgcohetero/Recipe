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
  recipe:any;
  ingredientes:any;
  pasos:any;
  constructor(private route: ActivatedRoute, private firebase:FirebaseServicesService) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.search(this.id);
  }

  async search(id:any){
    await this.firebase.viewRecipe(id).
    subscribe((res)=>{
      this.recipe=res;
      this.ingredientes=this.recipe.ingredientes;
      this.pasos=this.recipe.pasos;
    })
   }
  ngOnInit() {
  }
  editar(titulo,img,categoria,ingredientes,pasos,id){
    console.log(titulo,img,categoria,ingredientes,pasos)
    console.log(id)
    this.firebase.update(titulo, categoria, ingredientes, id, pasos, img).catch((err)=>{
      console.log(err);
    })

  }

}
