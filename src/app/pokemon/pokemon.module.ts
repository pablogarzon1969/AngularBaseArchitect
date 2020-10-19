import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { ListPokemonesComponent } from './list-pokemones/list-pokemones.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonFacade } from '../store/facade/pokemon/pokemon.facade';


@NgModule({
  declarations: [ListPokemonesComponent, DetailPokemonComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ],
  providers: [
    PokemonFacade
  ]
})
export class PokemonModule { }
