import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-comp',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './comp.html',
  styleUrl: './comp.css'
})
export class Comp {

  assignments = [
    {
      id: 1,
      title: 'Max Element in Array',
      description: 'Find the maximum element in an array.',
      score: 20,
      users: 68189,
      success: '97.16%',
      level: 'Easy',
      completed: false
    },
    {
      id:4,
      title: 'Number Distribution',
      description: 'Practice number distribution problems.',
      score: 20,
      users: 60174,
      success: '98.38%',
      level: 'Easy',
      completed: false
    },
    {
       id: 3,
      title: 'Reverse Array',
      description: 'Reverse an array without using extra space.',
      score: 20,
      users: 63369,
      success: '97.96%',
      level: 'Medium',
      completed: false
    },
    {
      id: 2,
      title: 'Reverse Array',
      description: 'Reverse an array without using extra space.',
      score: 20,
      users: 63369,
      success: '97.96%',
      level: 'Medium',
      completed: false
    }
  ];

}