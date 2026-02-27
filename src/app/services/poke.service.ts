import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private base = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemons(limit = 50, offset = 0): Observable<any> {
    return this.http.get(`${this.base}/pokemon?limit=${limit}&offset=${offset}`).pipe(
      switchMap((res: any) => {
        const requests = res.results.map((p: any) => 
          this.http.get(p.url).pipe(
            map((details: any) => ({
              name: p.name,
              url: p.url,
              image: details.sprites.front_default,
              id: details.id
            }))
          )
        );
        return forkJoin(requests).pipe(
          map(results => ({ results }))
        );
      })
    );
  }

  getPokemonByUrl(url: string): Observable<any> {
    return this.http.get(url);
  }
}

