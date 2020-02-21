import { Component } from '@angular/core';
import { Router,Route } from '@angular/router';
import { ServicePage} from '../service/service.page'
import {Result} from '../mescontacts/class'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public Routeur: Router
  Results : Result[]
  constructor(){}
 ouvrir(){
   console.log("bonjour")
   //this.Routeur.navigate(['service']) 
  }
} 
  
 
  
