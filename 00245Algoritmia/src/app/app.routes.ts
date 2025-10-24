import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Ex1Component } from './pages/ex1/ex1';


export const routes: Routes = [
  { path: '', redirectTo: 'aula01', pathMatch: 'full' },
  { path: 'aula01', component: Home },   // tua página inicial
  { path: 'ex1', component: Ex1Component }, // página de exercícios
  { path: '**', component: Home },       // fallback se alguém escreve rota errada
];
