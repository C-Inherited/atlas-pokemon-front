import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../common/interfaces';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemons: Pokemon[] = [];
  page = 1;
  pokePage: Pokemon[] = [];
  start = 0;
  pokemonToShow: Pokemon;


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    //this.getAllPokemon();
    this.getPage(1);
    this.showPokemonDetails(this.pokemons[0]);
  }

  showPokemonDetails(pokemon: Pokemon): void {
    for (const tPokemon of this.pokemons) {
      if (tPokemon.id === pokemon.id) {
        this.pokemonToShow = tPokemon;
      }
    }
  }


  getPage(index: number): void {

    this.sortPokemons();
    this.pokePage = [];
    for (let i = this.getContentOfPage(index - 1); i < this.getContentOfPage(index); i++) {

      this.pokePage.push(this.pokemons[i]);

    }
    this.start = this.start >= 130 ? 130 : this.start + 20;
    this.page = this.page >= 8 ? 8 : this.page + 1;
  }

  getContentOfPage(index: number): number {
    switch (index) {
      case 0: {
        return 0;
      }
      case 1: {
        return 20;
        break;
      }
      case 2: {
        return 40;
        break;
      }
      case 3: {
        return 60;
        break;
      }
      case 4: {
        return 80;
        break;
      }
      case 5: {
        return 100;
        break;
      }
      case 6: {
        return 120;
        break;
      }
      case 7: {
        return 140;
        break;
      }
      case 8: {
        return 150;
        break;
      }
    }

  }

  private sortPokemons(): void {
    this.pokemons.sort((a, b) => (a.id > b.id) ? 1 : -1);
  }

  // getAllPokemon(): void {
  //   for (let i = 1; i < 151; i++) {
  //     this.pokemonService.getPokemonById(i).subscribe((data) => {
  //       let types: string[] = [];
  //       let abilities: string[] = [];
  //       data.types.forEach((type) => types.push(type.type.name));
  //       data.abilities.forEach((ability) => abilities.push(ability.ability.name));
  //       let pokemon: Pokemon = new Pokemon(
  //         data.id,
  //         (data.species.name).toUpperCase(),
  //         data.stats[0].base_stat,
  //         data.stats[1].base_stat,
  //         data.stats[2].base_stat,
  //         data.stats[3].base_stat,
  //         data.stats[4].base_stat,
  //         data.stats[5].base_stat,
  //         types,
  //         data.height,
  //         data.weight,
  //         abilities,
  //         data.sprites.front_default,
  //         data.sprites.other['official-artwork'].front_default
  //       );
  //       this.pokemons.push(pokemon);
  //     });
  //   }
  // }

}
