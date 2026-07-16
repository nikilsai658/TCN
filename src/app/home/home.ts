import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  
})
export class Home implements OnInit {
  currentIndex = 0;
  transitionState: 'idle' | 'out' | 'in' = 'idle';
  rippleAnimating = false;

  testimonials = [
    {
      collegename:'',
      image: '../../assets/images/college1.png',
     
    },
    {
      collegename:'',
      image: '../../assets/images/college2.png',
    },
    {
       collegename:'',
      image: '../../assets/images/college3.png',
    },
    {
      collegename:'',
      image: '../../assets/images/college4.png',
     
    },
    {
      collegename:'',
      image: '../../assets/images/college5.png',
     
    },
   
  ];

  ngOnInit() {
    this.autoSlide();
  }

  next() {
    this.animateSlide(() => {
      this.currentIndex =
        (this.currentIndex + 1) % this.testimonials.length;
    });
  }

  prev() {
    this.animateSlide(() => {
      this.currentIndex =
        (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    });
  }

  goTo(index: number) {
    if (this.currentIndex === index) {
      return;
    }
    this.animateSlide(() => {
      this.currentIndex = index;
    });
  }

  animateSlide(update: () => void) {
    if (this.transitionState !== 'idle') {
      return;
    }

    this.transitionState = 'out';
    setTimeout(() => {
      update();
      this.transitionState = 'in';
      setTimeout(() => {
        this.transitionState = 'idle';
      }, 340);
    }, 290);
  }

  animateRipple() {
    this.rippleAnimating = false;
    setTimeout(() => {
      this.rippleAnimating = true;
    }, 10);
    setTimeout(() => {
      this.rippleAnimating = false;
    }, 950);
  }

  autoSlide() {
    setInterval(() => {
      this.next();
    }, 4000);
  }
}
