import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { EmperadorService } from './services/emperador.service';
import { CuentaComponent } from './cuenta/cuenta.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MisRecetasComponent } from './mis-recetas/mis-recetas.component';
import { ViewRepiceComponent } from './view-repice/view-repice.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {
    path: "", redirectTo: "login", pathMatch: "full"
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "cuenta", component: CuentaComponent
  },
  {
    path: 'main', component: MainComponent, canActivate: [EmperadorService]
  },
  {
    path: 'recetas', component: MisRecetasComponent
  },
  {
    path: 'receta/:id', component: ViewRepiceComponent
  },
  {
    path: 'editar/:id', component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
