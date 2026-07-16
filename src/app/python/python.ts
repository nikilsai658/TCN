import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-python',
  imports: [],
  templateUrl: './python.html',
  styleUrl: './python.css',
})
export class Python {
  constructor(private router:Router,private route:ActivatedRoute){}
  frame1(){
    this.router.navigate(['../comp'],{relativeTo:this.route});
  }
}
