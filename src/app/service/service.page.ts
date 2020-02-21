import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import {Result} from '../mescontacts/class'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class ServicePage {

  
  Results : Result[];

  
  constructor(public httpClient: HttpClient,public navCtrl: NavController,public routeur : Router) {
   this.getAll().subscribe(data => {this.Results = data});
   
   }
  link ='http://localhost:3000/results'
  
 getAll():Observable<Result[]>{
    return this.httpClient.get<Result[]>(this.link).pipe();
   }
   
  openPage(id: string) { 
  {
    console.log("" + id);

    this.routeur.navigate(['mescontacts', id]);
  }
  }
}
