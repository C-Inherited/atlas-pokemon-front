import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  pokemonToShow: Pokemon;


  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPage(1);
    this.showPokemonDetails(this.pokePage[0]);
  }

  showPokemonDetails(pokemon: Pokemon): void {
    this.activatedRoute.params.subscribe(params => {
      this.pokemonToShow = pokemon;
  })
}


  getPage(index: number): void {

    this.page = index;
    this.pokePage = [];
    for (let i = (index - 1)*20 +1; i <= index*20; i++) {
      this.pokemonService.getPokemonById(i).subscribe(pokemonRaw => {
        this.pokePage.push(this.pokemonService.parsePokemonRaw(pokemonRaw));
        this.sortPokemons();
      })
    }
  }


  private sortPokemons(): void {
    this.pokePage.sort((a, b) => (a.id > b.id) ? 1 : -1);
  }

  getAllPokemon(): void {
    for (let i = 1; i < 151; i++) {
      this.pokemonService.getPokemonById(i).subscribe(pokemonRaw => {
        this.pokemons.push(this.pokemonService.parsePokemonRaw(pokemonRaw));
      })
    };
  }
}
