import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { Router } from '@angular/router';

import { User } from '../models/user';
import { UserService } from '../core/services/user.service';
import { AuthFacade } from '../store/facade/auth/auth.facade';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  loading = false;
  users: User[];
  uiSubscription: Subscription;
  cargando = false;

  constructor(private router: Router, private userService: UserService, private authFacade: AuthFacade) { }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
      console.log(this.users[0].username);
      this.authFacade.cargarUsuario(this.users);
    });
  }
}
