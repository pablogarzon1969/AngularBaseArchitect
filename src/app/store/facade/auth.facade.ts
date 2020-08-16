import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as auth from '../../store/actions/auth.actions';
import * as usuarioAction from '../../store/actions/usuarios.actions';
import { AppState } from '../../store/reducers/app.reducer';


import { User } from '../../models/user';

@Injectable()
export class AuthFacade {
  user$ = this.store.select(state => state.usuarios.users);
  isLoadingUser$ = this.store.select('user');

  constructor(
    private store: Store<AppState>
  ) { }

  loggedIn(isLogin: boolean): void {
    this.store.dispatch(auth.loggedIn({ isLogin }));
  }

  logout(isLogin: boolean): void {
    this.store.dispatch(auth.loggedIn({ isLogin }));
  }

  cargarUsuario(users: User[]): void {
    this.store.dispatch(usuarioAction.cargarUsuariosSuccess({ usuarios: users }));
  }
}
