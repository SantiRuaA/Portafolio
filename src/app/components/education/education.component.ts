import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  education = [
    {
      title: 'Bachiller Tecnico en Desarrollo de Software',
      institution: 'Federico Carrasquilla',
      year: '2015-2021',
      description: 'Formación integral en lenguajes de programación, bases de datos y metodologías ágiles para la creación de aplicaciones robustas y eficientes.'
    },
    {
      title: 'Tecnologo en analisis y desarrollo de software',
      institution: 'SENA',
      year: '2022-2024',
      description: 'Profundiza en el análisis de requerimientos, diseño de arquitecturas de software, desarrollo en diversos lenguajes (NodeJS, .NET, Python, etc.), gestión de bases de datos y aseguramiento de la calidad del software.'
    },
    {
      title: 'Practicas profesionales',
      institution: 'Unidad de servicios tecnologicos SENA',
      year: '2024',
      description: 'Aplicacion de los conocimientos adquiridos durante el tecnologo a situaciones y proyectos reales.'
    },
    {
      title: 'Ingenieria en Cienia de Datos',
      institution: 'Iberoamericana',
      year: '2025-',
      description: 'Formación avanzada en la aplicación de métodos científicos y herramientas de ingeniería para analizar grandes volúmenes de datos, extraer conocimiento valioso y tomar decisiones estratégicas.'
    }

  ];

}
