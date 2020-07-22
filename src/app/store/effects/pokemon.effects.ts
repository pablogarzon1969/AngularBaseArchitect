
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as pokemonActions from '../actions/pokemon.actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { PokemonService } from '../../pokemon/pokemon.service';
import { of } from 'rxjs';


@Injectable()
export class PokemonEffects {

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) { }


  cargarPokemon$ = createEffect(
    () => this.actions$.pipe(
      ofType(pokemonActions.cargarPokemon),
      tap(data => console.log('effect tap', data)),
      mergeMap(
        (action) => this.pokemonService.getpokemon(action.url)
          .pipe(
            tap(data => console.log('getPokemon effect', data)),
            map(poke => pokemonActions.cargarPokemonSuccess({pokemon: poke })),
            catchError(err => of(pokemonActions.cargarPokemonError({ payload: err })))
          )
      )
    )
  );

}
