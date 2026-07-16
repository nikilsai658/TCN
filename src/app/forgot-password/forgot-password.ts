import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  constructor(private router:Router,private route:ActivatedRoute){}
  Tologinpage(){
    this.router.navigate(['../login'],{relativeTo:this.route});
  }
}
