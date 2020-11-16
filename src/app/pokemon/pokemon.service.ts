import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Pokemones } from '../models/pokemones.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {
  }

  getPokemones(): Observable<Pokemones[]> {
    return this.http.get<Pokemones>(`${this.url}/pokemon?offset=0&limit=20`)
      .pipe(map(resp => resp['results']),
        catchError(err => of('There was an error teh service')));




    /* return this.http.get<Pokemones>(`${this.url}/pokemon?offset=0&limit=20`)
     .pipe(mergeMap(get => this.http.get(get.results[0].url)),
       catchError(err => of('There was an error, but we handled it. 😉')));*/
    //.pipe(mergeMap(get => this.http.get(get.results[0].url)));

  }

  getpokemon(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url)
      .pipe(map(resp => resp));
  }
}
