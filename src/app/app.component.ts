import { Component } from '@angular/core';
import { AuthenticationService } from './core/services/authentication.service';
import { User } from './shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BaseArchitectAxa';
  user: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
    this.authenticationService.user.subscribe(x => this.user = x);
}

  logout() {
    this.authenticationService.logout();
}
}
