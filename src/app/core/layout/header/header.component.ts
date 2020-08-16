import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../auth/authentication.service';
import { User } from '../../../models/user';
import { Usuario } from '../../../models/usuario.model';
import { UserService } from '../../auth/user.service';

import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/app.reducer';
import * as auth from '../../../store/actions/auth.actions';

import { AuthFacade } from '../../../store/facade/auth.facade';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loading = false;
  users: User[];
  user: User;
  public usuario: Usuario[];
  cargando = false;

  uiSubscription: Subscription;
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private authFacade: AuthFacade,
    private store: Store<AppState>
  ) {
      this.uiSubscription = authFacade.user$
      .subscribe(user => {
        this.usuario = user;
      });
  }

  ngOnInit(): void {
      this.uiSubscription = this.authFacade.isLoadingUser$
      .subscribe(user => {
        this.cargando = user.isLoading;
      });
  }

  logout() {
    this.authFacade.logout(false);
    this.authenticationService.logout();
  }
}
