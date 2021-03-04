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
  addPokemonInput: boolean = false;
  pokemonToAdd: string = '';

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

  deletePokemon(id: number){
    console.log(id)
    this.trainerService.deletePokemonFromTeam(id).subscribe(() => {
      this.listTrainers()
    })
  }

  addPokemon(name: string){
    this.pokemonService.getPokemonByName(name).then(pokemon => {
      if (pokemon !== undefined){
        this.trainerService.addPokemonToTrainer({pokemonId: pokemon.id, trainerId: this.selectedTrainer.id}).subscribe(pokemonRaw =>
          {
            console.log(pokemonRaw)
            this.addPokemonInput = false
            this.listTrainers()
            this.trainerService.getTrainerById(this.selectedTrainer.id).subscribe(trainer => {
              trainer.team.forEach((pokemonInfo, index) => {
                this.pokemonService.getPokemonById(pokemonInfo.pokemonId)
                  .then((pokemonRaw) => {
                    trainer.team[index].pokemon = pokemonRaw;
                  });
                });
              this.selectedTrainer = trainer;
            });
        })
      }
    })
  }


  activateInput(): void{
    this.addPokemonInput = true;
  }
}
