import { Component, OnInit } from '@angular/core';
import { PokemonFacade } from '../../store/facade/pokemon/pokemon.facade';
import { Pokemones } from '../../models/pokemones.model';

@Component({
  selector: 'app-list-pokemones',
  templateUrl: './list-pokemones.component.html',
  styleUrls: ['./list-pokemones.component.css']
})
export class ListPokemonesComponent implements OnInit {
  pokemones: Pokemones[] = [];
  loading = false;
  error: any;
  public pokemons: Array<any> = [];
  constructor(private pokemonFacade: PokemonFacade) { }

  ngOnInit(): void {
    this.pokemonFacade.pokemones$
      .subscribe(({ pokemon, loading, error }) => {
        this.pokemones = pokemon;
        this.loading = loading;
        this.error = error;
      });
    this.pokemonFacade.loadPokemons();
  }

  detallePokemon(url: string): void {
    this.pokemonFacade.loadPokemon(url);
  }

}
