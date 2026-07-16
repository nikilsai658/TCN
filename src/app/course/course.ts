import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {
  constructor(private router:Router, private route:ActivatedRoute){}

  java(){
     this.router.navigate(['../java'],{relativeTo:this.route})
  }
   python(){
     this.router.navigate(['../python'],{relativeTo:this.route})
  }
   dsa(){
     this.router.navigate(['../dsa'],{relativeTo:this.route})
  }
   sql(){
     this.router.navigate(['../sql'],{relativeTo:this.route})
  }
}
