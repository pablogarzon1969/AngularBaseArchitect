import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../../models/user';
import { UserService } from '../../services/user.service';

import { Usuario } from '../../../models/usuario.model';

import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/app.reducer';
import { AuthFacade } from '../../../store/facade/auth/auth.facade';

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
    const getIsLoading = JSON.parse(localStorage.getItem('isLoading'));
    if (getIsLoading) {
      this.cargando = getIsLoading;
    } else {
      this.uiSubscription = this.authFacade.isLoadingUser$
        .subscribe(user => {
          this.cargando = user.isLoading;
        });
    }
  }

  logout() {
    this.authFacade.logout(false);
    this.authenticationService.logout();
  }
}
