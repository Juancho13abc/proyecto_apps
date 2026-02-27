import { Component, signal } from '@angular/core';
import { Componetes1 } from './componetes1/componetes1';
import { Componente2 } from './componente2/componente2';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [Componetes1, Componente2, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto_2026');
}
