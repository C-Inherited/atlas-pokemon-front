import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PokemonRaw} from '../common/interfaces';
import { Pokemon } from '../common/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  readonly url = 'https://pokeapi.co/api/v2';

  constructor(
    private http: HttpClient
  ) { }

  getAllPokemon(): Observable<PokemonRaw[]> {
    return this.http.get<PokemonRaw[]>(this.url + '/pokemon?limit=150');
  }

  getPokemonById(id: number): Observable<PokemonRaw> {
    return this.http.get<PokemonRaw>(this.url + '/pokemon/' + id);
  }

  getPokemonByName(name: string): Observable<PokemonRaw> {
    return this.http.get<PokemonRaw>(this.url + '/pokemon/' + name);
  }

  parsePokemonRaw(pokemonRaw: PokemonRaw): Pokemon{
    let pokemon: Pokemon;
    let types: string[] = [];
    let abilities: string[] = [];
    pokemonRaw.types.forEach((type) => types.push(type.type.name));
    pokemonRaw.abilities.forEach((ability) => abilities.push(ability.ability.name));
    pokemon = new Pokemon(
    pokemonRaw.id,
    (pokemonRaw.species.name).toUpperCase(),
    pokemonRaw.stats[0].base_stat,
    pokemonRaw.stats[1].base_stat,
    pokemonRaw.stats[2].base_stat,
    pokemonRaw.stats[3].base_stat,
    pokemonRaw.stats[4].base_stat,
    pokemonRaw.stats[5].base_stat,
    types,
    pokemonRaw.height,
    pokemonRaw.weight,
    abilities,
    pokemonRaw.sprites.front_default,
    pokemonRaw.sprites.other['official-artwork'].front_default
    );
    return pokemon;
  }
}



