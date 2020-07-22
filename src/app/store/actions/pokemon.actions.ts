import { createAction, props } from '@ngrx/store';
import { Pokemon } from '../../models/pokemon.model';

export const cargarPokemon = createAction('[Pokemon] Cargar Pokemon',
  props<{ url: string }>());

export const cargarPokemonSuccess = createAction(
  '[Pokemon] Cargar Pokemon Success',
  props<{ pokemon: Pokemon }>()
);

export const cargarPokemonError = createAction(
  '[Pokemon] Cargar Pokemon Error',
  props<{ payload: any }>()
);
