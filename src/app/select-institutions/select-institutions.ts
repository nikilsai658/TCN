import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-select-institutions',
  imports: [NgForOf],
  templateUrl: './select-institutions.html',
  styleUrl: './select-institutions.css',
})
export class SelectInstitutions {
  constructor(private router:Router,private route:ActivatedRoute,private http:HttpClient){}
  Tologinpage(){
    this.router.navigate(['../login'],{relativeTo:this.route});
  };
  
}
