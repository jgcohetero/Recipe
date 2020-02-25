import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { CuentaComponent } from './cuenta/cuenta.component';
import {HttpClientModule}from "@angular/common/http";
import { MisRecetasComponent } from './mis-recetas/mis-recetas.component';
var firebaseConfig = {
  apiKey: "AIzaSyDrW-D80lEvmTHriQJLXwQaSWKnIpw1yxQ",
  authDomain: "emperador-849ad.firebaseapp.com",
  databaseURL: "https://emperador-849ad.firebaseio.com",
  projectId: "emperador-849ad",
  storageBucket: "emperador-849ad.appspot.com",
  messagingSenderId: "808039815191",
  appId: "1:808039815191:web:d08cfea76962100f1fe452"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CuentaComponent,
    MisRecetasComponent,
    MainComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
