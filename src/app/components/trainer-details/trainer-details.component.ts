import { Component, Input, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer.service';
import { Trainer } from '../../common/trainer';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from 'src/app/common/pokemon';

@Component({
  selector: 'app-trainer-details',
  templateUrl: './trainer-details.component.html',
  styleUrls: ['./trainer-details.component.css'],
})
export class TrainerDetailsComponent implements OnInit {
  @Input()
  trainer: Trainer = new Trainer(0, '', '', 0, '');

  showDetails: boolean = false;
  pokemons: Pokemon[] = [];

  constructor(
    private trainerService: TrainerService,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    // this.getTrainerById(2);
    // this.getCompleteTrainerById(1);
  }

  private getTrainerById(id: number): void {
    this.trainerService.getTrainerById(id).subscribe((trainer) => {
      console.log(trainer);
      this.trainer = new Trainer(
        trainer.id,
        trainer.name,
        trainer.hobby,
        trainer.age,
        trainer.imageUrl
      );
    });
  }

  private getCompleteTrainerById(id: number): void {
    this.trainerService.getCompleteTrainerById(id).subscribe((trainer) => {
      console.log(trainer);
      this.trainer = new Trainer(
        trainer.id,
        trainer.name,
        trainer.hobby,
        trainer.age,
        trainer.imageUrl
      );
      //todo need to implement the algorithm to parse the id from the service response and call the pookemon service to get the complete pokemon datas
    });
  }

  getPokemonById(id: number): void {
    this.pokemonService.getPokemonById(id).subscribe((data) => {
      let types: string[] = [];
      let abilities: string[] = [];
      data.types.forEach((type) => types.push(type.type.name));
      data.abilities.forEach((ability) => abilities.push(ability.ability.name));
      let pokemon: Pokemon = new Pokemon(
        data.id,
        data.species.name.charAt(0).toLocaleUpperCase() + data.species.name.slice(1),
        data.stats[0].base_stat,
        data.stats[1].base_stat,
        data.stats[2].base_stat,
        data.stats[3].base_stat,
        data.stats[4].base_stat,
        data.stats[5].base_stat,
        types,
        data.height,
        data.weight,
        abilities,
        data.sprites.front_default,
        data.sprites.other['official-artwork'].front_default
      );
      this.pokemons.push(pokemon);
    });
  }

  getPokemonByName(name: string): void {
    name.toLocaleLowerCase;
    this.pokemonService.getPokemonByName(name).subscribe((data) => {
      let types: string[] = [];
      let abilities: string[] = [];
      data.types.forEach((type) => types.push(type.type.name));
      data.abilities.forEach((ability) => abilities.push(ability.ability.name));
      let pokemon: Pokemon = new Pokemon(
        data.id,
        data.species.name.charAt(0).toLocaleUpperCase() + data.species.name.slice(1),
        data.stats[0].base_stat,
        data.stats[1].base_stat,
        data.stats[2].base_stat,
        data.stats[3].base_stat,
        data.stats[4].base_stat,
        data.stats[5].base_stat,
        types,
        data.height,
        data.weight,
        abilities,
        data.sprites.front_default,
        data.sprites.other['official-artwork'].front_default
      );
      this.pokemons.push(pokemon);
    });
  }

  showTrainerDetails(trainer: Trainer) {
    this.trainer = trainer;
    this.pokemons = [];
    this.trainer.team.forEach(simplePokemon => this.getPokemonById(simplePokemon.pokemonId))
    this.showDetails = true;
  }
}
