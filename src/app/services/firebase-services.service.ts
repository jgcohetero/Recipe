import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServicesService {
  user: any;
  uid: any;
  constructor(private houseIoT: AngularFireDatabase) {
    this.user = localStorage.getItem('user');
    this.uid = JSON.parse(this.user).uid;
  }

  insertNew(titulo: any, categoria: any, ingredientes: any, id: any, pasos: any, img: any) {
    this.houseIoT.object(`/mealDB/${this.uid}/recetas/${id}`).set({ titulo: titulo, categoria: categoria, ingredientes: ingredientes, id: id, pasos: pasos, img: img, dificultad:'N/A' });
  }
  list(): Observable<any> {   
    return this.houseIoT.list(`/mealDB/${this.uid}/recetas`).valueChanges();
  }
  update(titulo: any, categoria: any, ingredientes: any, id: any, pasos: any, img: any,dificultad:any){
    return this.houseIoT.object(`/mealDB/${this.uid}/recetas/${id}`).update({ titulo: titulo, categoria: categoria, ingredientes: ingredientes, pasos: pasos, img: img,dificultad:dificultad });
  }

  viewRecipe(id:any){
    console.log(id)
    return this.houseIoT.object(`/mealDB/${this.uid}/recetas/${id}`).valueChanges();
  }
  
  
  
}