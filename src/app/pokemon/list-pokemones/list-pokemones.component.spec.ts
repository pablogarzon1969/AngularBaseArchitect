import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { PokemonService } from '../pokemon.service';
import { ListPokemonesComponent } from './list-pokemones.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { PokemonFacade } from '../../store/facade/pokemon.facade';

describe('ListPokemonesComponent', () => {
  let component: ListPokemonesComponent;
  let fixture: ComponentFixture<ListPokemonesComponent>;
  // let service: PokemonService;
  let storeMock: MockStore<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        PokemonFacade,
        provideMockStore({
          selectors: [{ selector: 'pokemones', value: '' }],
        })/*,
        { provide: Store }   // use test store instead of ngrx store
      */],
      imports: [
        StoreModule.forRoot({}),
        HttpClientTestingModule],
      declarations: [ListPokemonesComponent],

    })
      .compileComponents();
    storeMock = TestBed.inject(MockStore);
  }));




  beforeEach(() => {
    fixture = TestBed.createComponent(ListPokemonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 /* it('should return a pokemon', () => {
    storeMock.setState({ pokemon: 'pikachu' });
  });*/

 /* it('should return a pokemons', () => {
    storeMock.select('pokemon')
      .subscribe(({ pokemon, loading, error }) => {
        this.pokemones = pokemon;
        this.loading = loading;
        this.error = error;
      });

  });*/
});
