import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-courses',
  imports: [RouterLink, RouterOutlet,CommonModule,RouterLinkActive],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
