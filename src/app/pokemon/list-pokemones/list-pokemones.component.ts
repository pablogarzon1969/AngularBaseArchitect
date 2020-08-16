import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers/app.reducer';
import * as pokemones from '../../store/actions/pokemones.actions';
import * as pokemon from '../../store/actions/pokemon.actions';

import { PokemonFacade } from '../../store/facade/pokemon.facade';

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
  constructor(private pokemonFacade: PokemonFacade) { }

  ngOnInit(): void {
    this.pokemonFacade.pokemones$
      .subscribe(({ pokemon, loading, error }) => {
        this.pokemones = pokemon;
        this.loading = loading;
        this.error = error;
      });
    this.pokemonFacade.loadPokemons();
  }

  /**
 * @example
 * This is a good example
 * processTarget('yo')
 *
 * @param {string} target  The target to process see {@link Todo}
 * @returns The processed target number
 */
  detallePokemon(url: string): void {
    this.pokemonFacade.loadPokemon(url);
  }

}
