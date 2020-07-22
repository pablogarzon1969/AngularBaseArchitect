import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers/app.reducer';
import * as usuarioAction from '../store/actions/usuarios.actions';

import { User } from '../models/user';
import { UserService } from '../core/auth/user.service';



@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  loading = false;
  users: User[];

  constructor(private userService: UserService,  private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
      console.log(this.users[0].username);
      this.store.dispatch(usuarioAction.cargarUsuariosSuccess({ usuarios: this.users}));
    });
  }
}
