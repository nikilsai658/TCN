import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment-editor',
  standalone: true,
  imports: [CommonModule, RouterLink,FormsModule],
  templateUrl: './assignment-editor.html',
  styleUrls: ['./assignment-editor.css']
})
export class AssignmentEditor implements OnInit {

  assignment: any;

  assignments = [
    {
      id: 1,
      title: 'Max Element in Array',
      description: 'Find the maximum element from the given array of integers.',
      difficulty: 'Easy',
      score: 20,
      users: 68189,
      success: '97.16%',
      language: 'C',
      time: '15 Minutes',
      input: `5
-2 -19 8 15 4`,
      output: `15`,
      explanation: '15 is the maximum element in the array.'
    },
    {
      id: 2,
      title: 'Reverse Array',
      description: 'Reverse the given array.',
      difficulty: 'Easy',
      score: 20,
      users: 63369,
      success: '97.96%',
      language: 'C',
      time: '20 Minutes',
      input: `5
1 2 3 4 5`,
      output: `5 4 3 2 1`,
      explanation: 'Print the elements in reverse order.'
    },
    {
      id: 3,
      title: 'Odd and Even Sum',
      description: 'Find odd and even sum separately.',
      difficulty: 'Medium',
      score: 20,
      users: 61082,
      success: '98.88%',
      language: 'C',
      time: '20 Minutes',
      input: `5
1 2 3 4 5`,
      output: `Odd Sum = 9
Even Sum = 6`,
      explanation: 'Odd numbers are 1,3,5 and even numbers are 2,4.'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const id = Number(params.get('id'));

      this.assignment = this.assignments.find(x => x.id === id);

      if (!this.assignment) {
        this.assignment = this.assignments[0];
      }

    });

  }
  

}