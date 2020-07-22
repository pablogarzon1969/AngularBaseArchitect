
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as pokemonesActions from '../actions/pokemones.actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { PokemonService } from '../../pokemon/pokemon.service';
import { of } from 'rxjs';


@Injectable()
export class PokemonesEffects {

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) { }


  cargarPokemones$ = createEffect(
    () => this.actions$.pipe(
      ofType(pokemonesActions.cargarPokemones),
      tap(data => console.log('effect tap', data)),
      mergeMap(
        () => this.pokemonService.getPokemones()
          .pipe(
            tap(data => console.log('getPokemones effect', data)),
            map(poke => pokemonesActions.cargarPokemonesSuccess({ pokemones: poke })),
            catchError(err => of(pokemonesActions.cargarPokemonesError({ payload: err })))
          )
      )
    )
  );

}
