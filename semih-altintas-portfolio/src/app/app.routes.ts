import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutMeComponent } from './core/about-me/about-me.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about-me', component: AboutMeComponent }
];
