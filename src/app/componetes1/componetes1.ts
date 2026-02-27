import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componetes1',
  imports: [CommonModule],
  templateUrl: './componetes1.html',
  styleUrl: './componetes1.css',
})
export class Componetes1 {
  tarea = signal('');
  lista = signal<string[]>([]);

  agregarTarea() {
    if (this.tarea().trim() === '') return;
    this.lista.update(l => [...l, this.tarea().trim()]);
    this.tarea.set('');
  }
}
