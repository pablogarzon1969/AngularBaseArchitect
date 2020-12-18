import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess } from '../actions/usuarios.actions';
import { Usuario } from '../../shared/models/usuario.model';
import { User } from '../../shared/models/user.model';

export interface UsuariosState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
  user: Usuario[];
}

export const usuariosInitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
  user: []
}

const usuariosInitialReducer = createReducer(usuariosInitialState,

  on(cargarUsuarios, state => ({ ...state, loading: true })),


  on(cargarUsuariosSuccess, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...usuarios]
  })),

  on(cargarUsuariosError, (state, { payload }) => ({
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

export function usuariosReducer(state, action) {
  return usuariosInitialReducer(state, action);
}
