import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokemonesComponent } from './list-pokemones.component';

describe('ListPokemonesComponent', () => {
  let component: ListPokemonesComponent;
  let fixture: ComponentFixture<ListPokemonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
