import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  projecten = [
    { 
      title: 'Stratego', 
      description: 'Een C# backend applicatie met een eenvoudige JavaScript, HTML en CSS frontend.', 
      image: 'assets/stratego.png',
      githubLink: 'https://github.com/semih-0309/stratego'
    },
    { 
      title: 'Jury verdedigingsapp', 
      description: 'Een Vue.js applicatie met Java backend en PWA.', 
      image: 'assets/stageverdediging.png',
      githubLink: 'https://github.com/semih-0309/jury-defense-app'
    },
    { 
      title: 'Werknemer Dashboard', 
      description: 'Low-code backend met Angular frontend. Gemaakt voor Collide.', 
      image: 'assets/employeedashboard.png',
      githubLink: 'https://github.com/semih-0309/employee-dashboard'
    }
  ];

  private texts: string[] = [
    'Ik ben een Fullstack Developer',
    'Ik ben een gepassioneerde Gamer',
    'Ik ben een No-code Developer',
    'Ik ben een low-code Developer',
  ];
  private currentTextIndex: number = 0;
  private currentCharIndex: number = 0;
  private isDeleting: boolean = false;
  private typingSpeed: number = 100;
  private deletingSpeed: number = 50;
  private delayBetweenTexts: number = 2000;

  ngOnInit() {
    // Geen extra initialisatie nodig voor projecten
  }

  ngAfterViewInit() {
    this.typewriterEffect();
  }

  private typewriterEffect() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;

    const currentText = this.texts[this.currentTextIndex];

    if (!this.isDeleting) {
      // Typing
      if (this.currentCharIndex <= currentText.length) {
        typewriterElement.textContent = currentText.substring(0, this.currentCharIndex);
        this.currentCharIndex++;
        setTimeout(() => this.typewriterEffect(), this.typingSpeed);
      } else {
        // Start deleting after a delay
        setTimeout(() => {
          this.isDeleting = true;
          this.typewriterEffect();
        }, this.delayBetweenTexts);
      }
    } else {
      // Deleting
      if (this.currentCharIndex >= 0) {
        typewriterElement.textContent = currentText.substring(0, this.currentCharIndex);
        this.currentCharIndex--;
        setTimeout(() => this.typewriterEffect(), this.deletingSpeed);
      } else {
        // Move to next text
        this.isDeleting = false;
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        setTimeout(() => this.typewriterEffect(), 500);
      }
    }
  }
}