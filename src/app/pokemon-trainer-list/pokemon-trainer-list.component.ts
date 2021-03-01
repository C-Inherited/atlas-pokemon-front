import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pokemon } from 'src/app/common/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-trainer-list',
  templateUrl: './pokemon-trainer-list.component.html',
  styleUrls: ['./pokemon-trainer-list.component.css'],
})
export class PokemonTrainerListComponent implements OnInit {
  @Input() team: { id: number; pokemonId: number }[] = [];

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons = [];
    for (const simplePokemon of this.team) {
      console.log('Here i AM');
      this.getPokemonById(simplePokemon.pokemonId);
    }
  }

  getPokemonById(id: number): void {
    this.pokemonService.getPokemonById(id).subscribe((data) => {
      let types: string[] = [];
      let abilities: string[] = [];
      data.types.forEach((type) => types.push(type.type.name));
      data.abilities.forEach((ability) => abilities.push(ability.ability.name));
      let pokemon: Pokemon = new Pokemon(
        data.id,
        data.species.name,
        data.stats[0].base_stat,
        data.stats[1].base_stat,
        data.stats[2].base_stat,
        data.stats[3].base_stat,
        data.stats[4].base_stat,
        data.stats[5].base_stat,
        types,
        data.height,
        data.weight,
        abilities,
        data.sprites.front_default,
        data.sprites.other['official-artwork'].front_default
      );
      this.pokemons.push(pokemon);
    });
  }

  getPokemonByName(name: string): void {
    name.toLocaleLowerCase;
    this.pokemonService.getPokemonByName(name).subscribe((data) => {
      let types: string[] = [];
      let abilities: string[] = [];
      data.types.forEach((type) => types.push(type.type.name));
      data.abilities.forEach((ability) => abilities.push(ability.ability.name));
      let pokemon: Pokemon = new Pokemon(
        data.id,
        data.species.name,
        data.stats[0].base_stat,
        data.stats[1].base_stat,
        data.stats[2].base_stat,
        data.stats[3].base_stat,
        data.stats[4].base_stat,
        data.stats[5].base_stat,
        types,
        data.height,
        data.weight,
        abilities,
        data.sprites.front_default,
        data.sprites.other['official-artwork'].front_default
      );
      this.pokemons.push(pokemon);
    });
  }

  showPokemon(index: number) {
    this.pokemons[index].show = !this.pokemons[index].show;
  }
}