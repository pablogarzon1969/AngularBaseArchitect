import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from '../pokemon.service';
import { ListPokemonesComponent } from './list-pokemones.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Store} from '@ngrx/store';
import { AppState } from '../../store/reducers/app.reducer';

describe('ListPokemonesComponent', () => {
  let component: ListPokemonesComponent;
  let fixture: ComponentFixture<ListPokemonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Store, useClass: AppState }   // use test store instead of ngrx store
      ],
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
      declarations: [ ListPokemonesComponent ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ListPokemonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
