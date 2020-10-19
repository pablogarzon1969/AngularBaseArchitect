import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as auth from '../../actions/auth.actions';
import { AppState } from '../../reducers/app.reducer';
import { cargarPokemones } from '../../actions/pokemones.actions';
import * as pokemon from '../../actions/pokemon.actions';


@Injectable()
export class PokemonFacade {
  pokemon$ = this.store.select('pokemon');
  pokemones$ =   this.store.select('pokemones');

  constructor(
    private store: Store<AppState>
  ) { }

  loadPokemons(): void{
    this.store.dispatch(cargarPokemones());
  }

  loadPokemon(url: string): void{
    this.store.dispatch(pokemon.cargarPokemon({ url }));
  }
}

