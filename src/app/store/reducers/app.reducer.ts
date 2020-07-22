import { ActionReducerMap } from '@ngrx/store';
import * as auth from '../reducers/auth.reducer';
import * as usuarios from './usuarios.reducer';
import * as pokemones from './pokemones.reducer';
import * as pokemon from './pokemon.reducer';


export interface AppState {
  user: auth.State;
  usuarios: usuarios.UsuariosState;
  pokemones: pokemones.PokemonesState;
  pokemon: pokemon.PokemonState;
}

export const appReducers: ActionReducerMap<AppState> = {
  user: auth.authReducer,
  usuarios: usuarios.usuariosReducer,
  pokemones: pokemones.pokemonesReducer,
  pokemon: pokemon.pokemonReducer
}
