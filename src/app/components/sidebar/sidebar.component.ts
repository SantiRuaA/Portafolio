import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  links = [
    { path: '#home', label: 'Inicio' },
    { path: '#about', label: 'Sobre mí' },
    { path: '#portfolio', label: 'Portafolio' },
    { path: '#education', label: 'Educación' },
    { path: '#skills', label: 'Skills' },
    { path: '#contact', label: 'Contacto' }
  ];

  scrollTo(targetId: string, event: Event) {
    event.preventDefault();
  
    const section = document.querySelector(targetId);
    const container = document.querySelector('#main-content');
  
    if (section && container) {
      const sectionTop = (section as HTMLElement).offsetTop;
  
      (container as HTMLElement).scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  }
}