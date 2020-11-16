import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailPokemonComponent } from './detail-pokemon.component';
import { PokemonFacade } from '../../store/facade/pokemon/pokemon.facade';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetailPokemonComponent', () => {
  let component: DetailPokemonComponent;
  let fixture: ComponentFixture<DetailPokemonComponent>;
  let storeMock: MockStore<any>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        PokemonFacade,
        provideMockStore({
          selectors: [{ selector: 'pokemones', value: '' }],
        })],
      imports: [
        StoreModule.forRoot({}),
        HttpClientTestingModule],
      declarations: [ DetailPokemonComponent ]
    })
    .compileComponents();
    storeMock = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPokemonComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
