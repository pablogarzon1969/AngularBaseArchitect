import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';


import { Pokemones } from '../models/pokemones.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {
  }

  getPokemones() {
    return this.http.get<Pokemones>(`${this.url}/pokemon?offset=0&limit=20`)
      .pipe(map(resp => resp['results']));
    //.pipe(mergeMap(get => this.http.get(get.results[0].url)));
  }

  getpokemon(url: string) {
    return this.http.get<Pokemon>(url)
      .pipe(map(resp => resp));
  }
}
