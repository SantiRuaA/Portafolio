import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  activeIndex: number | null = null;

  botonesOcultos(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = null; 
    } else {
      this.activeIndex = index; 
    }
  }
}
