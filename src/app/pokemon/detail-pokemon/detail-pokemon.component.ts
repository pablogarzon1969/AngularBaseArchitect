import { Component, OnInit } from '@angular/core';
import { PokemonFacade } from '../../store/facade/pokemon/pokemon.facade';
import { Observable } from 'rxjs';
import { Pokemon } from '../../shared/models/pokemon.model';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {
  uipokemonSubscription: any;
  public pokemon: Pokemon;
  public url: any;
  pokemonObs$: Observable<{}>;
  constructor(private pokemonFacade: PokemonFacade) {
  }

  ngOnInit(): void {
    this.pokemonFacade.pokemon$
      .subscribe(({ pokemon, loading, error }) => {
        this.pokemon = pokemon;
      });
  }
}
