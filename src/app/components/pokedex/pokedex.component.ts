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
  page = 1;
  pokePage: Pokemon[] = [];
  start = 0;
  pokemonToShow: Pokemon;


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.setUp();
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

  setUp(): void {
    const pokemons = [];
    for (let i = 1; i < 151; i++) {
      this.pokemonService.getPokemonById(i).then(pokemonRaw => {
        pokemons.push(this.pokemonService.parsePokemonRaw(pokemonRaw));
      })
    };
    Promise.all(pokemons).then(pokemons => {
      console.log(pokemons[0])
      this.pokemons = pokemons;
      this.getPage(1);
      this.showPokemonDetails(this.pokemons[0]);
    });
    
  }
}
