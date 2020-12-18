import { createReducer, on } from '@ngrx/store';
import { cargarPokemon, cargarPokemonError, cargarPokemonSuccess } from '../actions/pokemon.actions';
import { Pokemon } from '../../shared/models/pokemon.model';

export interface PokemonState {
  pokemon: Pokemon;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const pokemonInitialState: PokemonState = {
  pokemon: null,
  loaded: false,
  loading: false,
  error: null
}

const pokemonInitialReducer = createReducer(pokemonInitialState,

  on(cargarPokemon, (state, { url }) => ({
    ...state,
    loading: true,
    url
  })),
  on(cargarPokemonSuccess, (state, { pokemon }) => ({
    ...state,
    loading: false,
    loaded: true,
    pokemon
  })),
  on(cargarPokemonError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  })),
);

export function pokemonReducer(state, action) {
  return pokemonInitialReducer(state, action);
}
