import { Routes } from '@angular/router';
import { Home } from './pages/Aula01/Aula01';
import { Aula02Component } from './pages/Aula02/Aula02';
import { Aula03Component } from './pages/Aula03/Aula03';
import { Aula04Component } from './pages/Aula04/Aula04';

export const routes: Routes = [
  { path: '', redirectTo: 'Aula01', pathMatch: 'full' },
  { path: 'Aula01', component: Home },   // página inicial -- exemplos
  { path: 'Aula02', component: Aula02Component }, // página de exercícios -- aula 2
  { path: 'Aula03', component: Aula03Component }, //página de exercícios -- aula 3
   { path: 'Aula04', component: Aula04Component }, //página de exercícios -- aula 4
  { path: '**', component: Home },       // fallback se alguém escreve rota errada
];
