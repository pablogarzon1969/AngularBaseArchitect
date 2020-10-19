import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as auth from '../../actions/auth.actions';
import * as usuarioAction from '../../actions/usuarios.actions';
import { AppState } from '../../reducers/app.reducer';



import { User } from '../../../models/user';

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

  public cargarUsuario(users: User[]): void {
    this.store.dispatch(usuarioAction.cargarUsuariosSuccess({ usuarios: users }));
  }
}
