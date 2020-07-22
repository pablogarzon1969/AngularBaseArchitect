import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers/app.reducer';
import * as pokemones from '../../store/actions/pokemones.actions';
import * as pokemon from '../../store/actions/pokemon.actions';

import { PokemonService } from '../pokemon.service';
import { cargarPokemones } from '../../store/actions/pokemones.actions';
import { cargarPokemon } from '../../store/actions/pokemon.actions';

import { Pokemones } from '../../models/pokemones.model';

@Component({
  selector: 'app-list-pokemones',
  templateUrl: './list-pokemones.component.html',
  styleUrls: ['./list-pokemones.component.css']
})
export class ListPokemonesComponent implements OnInit {
  pokemones: Pokemones[] = [];
  loading = false;
  error: any;
  public pokemons: Array<any> = [];
  constructor(private http: HttpClient, private pokemonService: PokemonService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('pokemones')
      .subscribe(({ pokemon, loading, error }) => {
        this.pokemones = pokemon;
        this.loading = loading;
        this.error = error;
      });
    this.store.dispatch(cargarPokemones());
  }

  detallePokemon(url: string) {
    console.log(url);
    this.store.dispatch(pokemon.cargarPokemon({ url }));
  }

}
