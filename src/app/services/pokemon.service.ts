import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Pokemon} from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  readonly url = 'https://pokeapi.co/api/v2';

  constructor(
    private http: HttpClient
  ) { }

  getAllPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url + '/pokemon?limit=150');
  }

  getPokemonByTrainerId(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url + '/pokemon/' + id);
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url + '/pokemon/' + name);
  }
}



