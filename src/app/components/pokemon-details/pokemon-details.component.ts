import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../common/interfaces';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  @Input() pokemon!: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
