import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonesComponent} from './list-pokemones/list-pokemones.component';
import { DetailPokemonComponent} from './detail-pokemon/detail-pokemon.component';

const routes: Routes = [
  { path: '', component: ListPokemonesComponent },
  { path: 'Detail', component: DetailPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
