import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/common/pokemon';

@Component({
  selector: 'app-teams-selected-pokemon',
  templateUrl: './teams-selected-pokemon.component.html',
  styleUrls: ['./teams-selected-pokemon.component.css']
})
export class TeamsSelectedPokemonComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
