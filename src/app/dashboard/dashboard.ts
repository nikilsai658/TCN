import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet,  RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule, RouterLink,FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private router:Router){}
  login(){
    this.router.navigate(['/auth']);
  }
}
