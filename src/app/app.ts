import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componetes1 } from './componetes1/componetes1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componetes1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto_2026');
}
