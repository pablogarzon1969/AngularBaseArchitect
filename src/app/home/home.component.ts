import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../models/user';
import { UserService } from '../core/auth/user.service';
import { AuthFacade } from '../store/facade/auth.facade';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  loading = false;
  users: User[];

  constructor(private userService: UserService, private authFacade: AuthFacade) { }

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
