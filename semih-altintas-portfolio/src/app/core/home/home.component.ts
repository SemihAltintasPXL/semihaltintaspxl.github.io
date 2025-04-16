import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  projects = [
    { 
      title: 'Stratego', 
      description: 'A C# backend application with basic javascript, html and css frontend.', 
      image: 'https://via.placeholder.com/300x200?text=Project1',
      githubLink: 'https://github.com/semih-0309/stratego'
    },
    { 
      title: 'Jury defense app', 
      description: 'A vue.js application with java backend and PWA.', 
      image: 'https://via.placeholder.com/300x200?text=Project2',
      githubLink: 'https://github.com/semih-0309/jury-defense-app'
    },
    { 
      title: 'Employee Dashboard', 
      description: 'Low code backend with angular frontend.', 
      image: 'https://via.placeholder.com/300x200?text=Project3',
      githubLink: 'https://github.com/semih-0309/employee-dashboard'
    }
  ];

  ngOnInit() {
    // No dynamic initialization needed for this portfolio
  }
}