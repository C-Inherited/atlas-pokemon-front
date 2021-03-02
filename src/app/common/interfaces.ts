
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

export interface Pokemon {
  id: number;
  name: string;
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  types: string[];
  height: number;
  weight: number;
  abilities: string[];
  photo: string;
  artwork: string;
  show: boolean;
}


