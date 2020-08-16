import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as auth from '../../store/actions/auth.actions';
import { AppState } from '../../store/reducers/app.reducer';
import { cargarPokemones } from '../../store/actions/pokemones.actions';
import * as pokemon from '../../store/actions/pokemon.actions';


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

