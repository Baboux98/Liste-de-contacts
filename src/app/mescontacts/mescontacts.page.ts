import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PreloadAllModules, RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Result} from '../mescontacts/class'

@Component({
  selector: 'app-mescontacts',
  templateUrl: './mescontacts.page.html',
  styleUrls: ['./mescontacts.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class MescontactsPage implements OnInit {
  link ='http://localhost:3000/results' 
  Result: Result;
  id: string;
  

  constructor(public httpClient: HttpClient,private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getUser(this.id).subscribe(data => {this.Result = data});
    console.log(this.id)
    console.log(this.Result)
   }
  getUser(id):Observable<Result>
  {
    return this.httpClient.get<Result>(this.link + '/' +id).pipe()
  }

  ngOnInit() {
      
  }
}
