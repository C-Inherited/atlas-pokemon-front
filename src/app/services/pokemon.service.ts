import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient,
  ) {}

  getPokemonById(id: number): Observable<PokemonRaw> {
    return this.http.get<PokemonRaw>('https:pokeapi.co/api/v2/pokemon/'+id);
  }

  getPokemonByName(name: string): Observable<PokemonRaw> {
    return this.http.get<PokemonRaw>('https:pokeapi.co/api/v2/pokemon/'+name);
  }
  
}

interface PokemonRaw {
    id: number
     species: {
         name: string
     },
     stats: {
       base_stat: number,
       stat: {
         name: string
       }
     }[],
     types: {
       type: {
         name: string
       }
     }[],
     sprites: {
         front_default: string,
         other: {
           "official-artwork": {
             front_default
           }
         }
     },
     weight: number,
     height: number,
     abilities: {
       ability: {
         name: string
       }
     }[]
}