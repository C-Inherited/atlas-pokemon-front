import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trainer } from 'src/app/common/interfaces';
import { Pokemon } from 'src/app/common/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  trainers: Trainer[] = [];
  selectedTrainer!: Trainer;
  team: Pokemon[];
  selectedPokemon!: Pokemon;

  constructor(
    private trainerService: TrainerService,
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.listTrainers();
  }

  async listTrainers(): Promise<Trainer[]> {
    this.trainers = [];
    (await (this.trainerService
      .getTrainers()))
      .subscribe((trainerList) => {
        this.trainers = trainerList;
      });
    return this.trainers;
  }

  selectTrainer(trainer: Trainer): void{
    trainer.team.forEach((pokemonInfo, index) => {
      this.pokemonService.getPokemonById(pokemonInfo.pokemonId)
        .then((pokemon) => {
          trainer.team[index].pokemon = pokemon;
          if (trainer.team.length > 0){
            this.selectedPokemon = trainer.team[0].pokemon;
          }
        });
    });
    this.selectedTrainer = trainer;

  }

  selectPokemon(pokemon: Pokemon): void{
    this.selectedPokemon = pokemon;
    console.log(this.selectedPokemon);
  }
}
