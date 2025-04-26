import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; // Necesario para ngStyle
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  generatePDF(): void {
    const link = document.createElement('a');
    link.href = 'assets/CV_SantiagoRuaAgudelo.pdf';
    link.download = 'CV_SantiagoRuaAgudelo.pdf'; // nombre al guardar
    link.target = '_blank';
    link.click();
  }
}
