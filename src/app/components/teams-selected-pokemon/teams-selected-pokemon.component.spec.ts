import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsSelectedPokemonComponent } from './teams-selected-pokemon.component';

describe('TeamsSelectedPokemonComponent', () => {
  let component: TeamsSelectedPokemonComponent;
  let fixture: ComponentFixture<TeamsSelectedPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsSelectedPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsSelectedPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
