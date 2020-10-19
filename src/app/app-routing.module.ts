import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';

import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: ``, loadChildren: () =>
      import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]
  },
  {
    path: `pokemon`, loadChildren: () =>
      import('./pokemon/pokemon.module').then(m => m.PokemonModule), canActivate: [AuthGuard], data: { preload: true }
  },
  {
    path: `reports`, loadChildren: () =>
      import('./reports/reports.module').then(m => m.ReportsModule), canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
