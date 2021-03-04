import { Pokemon } from "./pokemon";

export interface Trainer {
  id: number;
  name: string;
  hobby: string;
  age: number;
  imageUrl: string;
  team: {
    id: number,
    pokemonId: number; // ERROR
    pokemon?: Pokemon;
  }[];
}

export interface PokemonRaw {
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
      name: string,
      url: string
    },
    is_hidden: boolean
  }[]

}

export interface SimpleTrainer {
  name: string;
  hobby: string;
  age: number;
  imageUrl: string;
}

export interface SimplePokemon{
  id: number;
  pokemonId: number;
}
