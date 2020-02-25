import { Component, OnInit } from '@angular/core';
import { FirebaseServicesService } from 'src/app/services/firebase-services.service';

@Component({
  selector: 'app-mis-recetas',
  templateUrl: './mis-recetas.component.html',
  styleUrls: ['./mis-recetas.component.css']
})
export class MisRecetasComponent implements OnInit {

  data:any;
  constructor(private houseIoTService: FirebaseServicesService) {
    this.houseIoTService.list().
    subscribe((res)=>{
      this.data=res;
      console.log(res)
    })
   }

  ngOnInit() {
  }

}
