import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTrainerDetailsComponent } from './pokemon-trainer-details.component';

describe('PokemonTrainerDetailsComponent', () => {
  let component: PokemonTrainerDetailsComponent;
  let fixture: ComponentFixture<PokemonTrainerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonTrainerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTrainerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
