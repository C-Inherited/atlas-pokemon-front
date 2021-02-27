import { Pokemon } from "./pokemon";

export class Trainer {
  id: number;
  name: string;
  hobby: string;
  age: number;
  imageUrl: string;
  team: Pokemon[] = [];


  constructor(id: number, name: string, hobby: string, age: number, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.hobby = hobby;
    this.age = age;
    this.imageUrl = imageUrl;
  }
}
