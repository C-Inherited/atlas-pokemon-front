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
  show = false;

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    await this.setUp();
  }

  showPokedex(): void{
    this.show = true
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
      this.pokemonService.getPokemonById(i).then(pokemon => {
        this.pokePage.push(pokemon);
        this.sortPokemons();
      })
    }
  }


  private sortPokemons(): void {
    this.pokePage.sort((a, b) => (a.id > b.id) ? 1 : -1);
  }

  async setUp(): Promise<void> {
    const pokemons = [];
    for (let i = 1; i < 151; i++) {
      await this.pokemonService.getPokemonById(i).then(pokemonRaw => {
        pokemons.push(pokemonRaw);
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
