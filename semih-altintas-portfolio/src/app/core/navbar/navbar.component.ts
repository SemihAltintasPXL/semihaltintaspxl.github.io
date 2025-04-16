import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    standalone: true,
    imports: [CommonModule],
})
export class NavbarComponent {
    navItems = [
        { label: 'Home', path: 'home' },
        { label: 'Over Mij', path: '#' },
        { label: 'Seminaries', path: '#' }
    ];
}