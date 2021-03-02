import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/common/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemons: Pokemon[] = [];
  page: number = 1;
  totalPages: number = 15;
  pokePage: Pokemon[] = [];
  start = 0;


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemon();
    // this.sortPokemons();
  }

  getNextPage() {


    this.pokePage = [];
    for (let i = 0; i < 150; i++) {
      if (i >= this.start && i < (20 * this.page) && i < (this.totalPages * 10)) {
        this.pokePage.push(this.pokemons[i]);
      }
    }
    this.start = this.start >= 130 ? 130 : this.start + 20;
    this.page = this.page >= 8 ? 8 : this.page + 1;
  }

  getPreviousPage() {


    this.pokePage = [];
    for (let i = 0; i < 150; i++) {
      if (i >= this.start && i < (20 * this.page) && i < (this.totalPages * 10)) {
        this.pokePage.push(this.pokemons[i]);
      }
    }
    this.start = this.start < 0 ? 0 : this.start - 20;
    this.page = this.page < 2 ? 1 : this.page - 1;

  }

  private sortPokemons() {
    this.pokemons.sort((a, b) => (a.id > b.id) ? 1 : -1);
  }

  getAllPokemon(): void {
    for (let i = 1; i < 151; i++) {
      this.pokemonService.getPokemonById(i).subscribe((data) => {
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
  }

}
