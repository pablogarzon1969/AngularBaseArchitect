import { createAction, props } from '@ngrx/store';
import { Pokemones } from '../../models/pokemones.model';

export const cargarPokemones = createAction('[Pokemones] Cargar Pokemones');

export const cargarPokemonesSuccess = createAction(
  '[Pokemones] Cargar Pokemones Success',
  props<{ pokemones: Pokemones[] }>()
);

export const cargarPokemonesError = createAction(
  '[Pokemones] Cargar Pokemones Error',
  props<{ payload: any }>()
);


