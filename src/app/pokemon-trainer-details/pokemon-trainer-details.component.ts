import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../common/pokemon';

@Component({
  selector: 'app-pokemon-trainer-details',
  templateUrl: './pokemon-trainer-details.component.html',
  styleUrls: ['./pokemon-trainer-details.component.css'],
})
export class PokemonTrainerDetailsComponent implements OnInit {
  @Input() pokemon!: Pokemon;

  constructor() {}

  ngOnInit(): void {}
}
