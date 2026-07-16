import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-dash',
  imports: [],
  templateUrl: './course-dash.html',
  styleUrl: './course-dash.css',
})
export class CourseDash {
  constructor(private router:Router,private route:ActivatedRoute){}
  first(){
    this.router.navigate(['../course'],{relativeTo:this.route});
  }
  second(){
    this.router.navigate(['../secondyear'],{relativeTo:this.route});
  }
}
