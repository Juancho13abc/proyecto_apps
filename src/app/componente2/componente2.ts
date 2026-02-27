import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeService } from '../services/poke.service';

@Component({
  standalone: true,
  selector: 'app-componente2',
  imports: [CommonModule],
  templateUrl: './componente2.html',
  styleUrl: './componente2.css',
})
export class Componente2 implements OnInit {
  pokemons: Array<any> = [];
  loading = false;
  error: string | null = null;

  private poke = inject(PokeService);

  ngOnInit(): void {
    this.fetchList();
  }

  fetchList(limit = 50) {
    this.loading = true;
    this.error = null;
    this.poke.getPokemons(limit).subscribe({
      next: (res) => {
        this.pokemons = res.results || [];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al obtener Pokémon';
        this.loading = false;
      }
    });
  }
}
