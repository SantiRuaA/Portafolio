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

  proyectos = [
    {
      nombre: 'StarRouting',
      descripcion: 'Aplicación web y movil desarrollada importante empresa de envios en la ciudad de medellin, ayudando a planificar rutas de envio y asegurar la entrega segura de productos.',
      imagen: 'assets/img/starrouting1.png',
      tecnologias: ['angular', 'ionic', 'node'],
      linkPagina: 'https://star-routing.netlify.app/landing-page',
      links: [
        { tipo: 'Frontend', url: 'https://github.com/Miltrus/proyecto' },
        { tipo: 'Backend', url: 'https://github.com/SantiRuaA/api' },
        { tipo: 'Movil', url: 'https://github.com/Miltrus/Movil' }
      ],
      imagenesCarrusel: [
        'assets/img/starrouting1.png'
      ]
    },
    {
      nombre: 'SRA',
      descripcion: 'Aplicación web desarrollada para ser usada como organizardor de horarios para los profesores del SENA asegurando que todos los instructores tengan asignadas las horas y clases correctas.',
      imagen: 'assets/img/sra1.png',
      tecnologias: ['angular', 'node'],
      links: [
        { tipo: 'Frontend', url: 'https://github.com/SantiRuaA/SRA' },
        { tipo: 'Backend', url: 'https://github.com/SantiRuaA/SRA_back' }
      ],
      imagenesCarrusel: [
        'assets/img/sra1.png',
        'assets/img/sra2.png',
        'assets/img/sra3.png',
        'assets/img/sra4.png'
      ]
    },
    {
      nombre: 'PublicBot',
      descripcion: 'Aplicacion web desarrollada para contestar preguntas al publico general sobre el SENA',
      imagen: 'assets/img/publicbot1.png',
      tecnologias: ['angular'],
      imagenesCarrusel: [
        'assets/img/publicbot1.png',
        'assets/img/publicbot2.png',
        'assets/img/publicbot3.png'
      ]
    },
    {
      nombre: 'CertiBot',
      descripcion: 'Aplicacion web desarrollada para facilitar la creacion de items evaluativos',
      imagen: 'assets/img/certibot1.png',
      tecnologias: ['angular'],
      imagenesCarrusel: [
        'assets/img/logincertibot.png',
        'assets/img/certibot1.png'
      ]
    }
  ];

  // Para mostrar los botones ocultos de GitHub
  activeIndex: number | null = null;

  toggleGithubOptions(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  // Para manejar el carrusel
  imagenesCarrusel: string[] = [];
  carruselAbierto: boolean = false;
  imagenActual: number = 0;

  abrirCarrusel(proyecto: any) {
    this.imagenesCarrusel = proyecto.imagenesCarrusel;
    this.imagenActual = 0;
    this.carruselAbierto = true;
    document.body.style.overflow = 'hidden'; // bloquear scroll
  }

  cerrarCarrusel() {
    this.carruselAbierto = false;
    document.body.style.overflow = 'auto'; // habilitar scroll
  }

  siguienteImagen() {
    this.imagenActual = (this.imagenActual + 1) % this.imagenesCarrusel.length;
  }

  anteriorImagen() {
    this.imagenActual = (this.imagenActual - 1 + this.imagenesCarrusel.length) % this.imagenesCarrusel.length;
  }
}
