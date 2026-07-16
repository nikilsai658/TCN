import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-helpsupport',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './helpsupport.html',
  styleUrl: './helpsupport.css',
})
export class Helpsupport {


  showNotification = false;
  timer: any;

  submitTicket() {
    console.log('Button clicked');
    clearTimeout(this.timer);

    this.showNotification = true;

    this.timer = setTimeout(() => {
      this.showNotification = false;
    }, 2000);

  }
}
