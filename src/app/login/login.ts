import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm!: FormGroup;
  msg:string="";
  constructor(private router:Router,private route:ActivatedRoute,private fb:FormBuilder){
    this.loginForm =this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  forgotpassword(){
    this.router.navigate(['../forgot-password'],{relativeTo:this.route});
  }
  selectInstitution(){
    this.router.navigate(['../select-institution'],{relativeTo:this.route});
  }
  login(){
    if(this.loginForm.valid){
     
      this.router.navigate(['/courses']);
    }else{
      this.msg="Please fill all the details";
    }
    }
}
