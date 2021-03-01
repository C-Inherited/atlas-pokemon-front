import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTrainerListComponent } from './pokemon-trainer-list.component';

describe('PokemonTrainerListComponent', () => {
  let component: PokemonTrainerListComponent;
  let fixture: ComponentFixture<PokemonTrainerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonTrainerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTrainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
