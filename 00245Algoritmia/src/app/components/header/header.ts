import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule], // assegura que o CommonModule está disponível
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
