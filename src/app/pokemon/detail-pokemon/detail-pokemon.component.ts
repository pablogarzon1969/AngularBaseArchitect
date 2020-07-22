import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers/app.reducer';

import { PokemonService } from '../pokemon.service';

import { Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {
  uipokemonSubscription: any;
  public pokemon: Pokemon;
  public url: any;
  pokemonObs$: Observable<{}>;
  constructor(private store: Store<AppState>, private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.store.select('pokemon').subscribe(({ pokemon, loading, error }) => {
      this.pokemon = pokemon;
    });
  }
}
