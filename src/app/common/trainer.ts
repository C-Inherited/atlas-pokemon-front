export class Trainer {
  id: number;
  name: string;
  // team: Pokemon[];
  hobby: string;
  age: number;
  imageUrl: string;


  constructor(id: number, name: string, hobby: string, age: number, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.hobby = hobby;
    this.age = age;
    this.imageUrl = imageUrl;
  }
}
