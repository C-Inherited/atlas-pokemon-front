import { ElementSchemaRegistry } from '@angular/compiler';
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
  addPokemonInput = false;
  pokemonToAdd = '';

  constructor(
    private trainerService: TrainerService,
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    await this.listTrainers();
  }

  async listTrainers(): Promise<void> {
    this.trainers = [];
    (await this.trainerService.getTrainers().then((trainerList) => {
        this.trainers = trainerList;
      }));
  }

  selectTrainer(trainer: Trainer): void{
    trainer.team.forEach((pokemonInfo, index) => {
      this.pokemonService.getPokemonById(pokemonInfo.pokemonId)
        .then((pokemon) => {
          trainer.team[index].pokemon = pokemon;
          this.selectedPokemon = undefined;
        });
    });
    this.selectedTrainer = trainer;
  }

  selectPokemon(pokemon: Pokemon): void{
    if (this.selectedPokemon?.id === pokemon.id){
      this.selectedPokemon = undefined;
    } else{
      this.selectedPokemon = pokemon;
    }
  }

  deletePokemon(id: number){
    console.log(id)
    this.trainerService.deletePokemonFromTeam(id).subscribe(() => {
      this.selectedTrainer.team.forEach((pokemon, index) => {
        if (pokemon.id === id){
          this.selectedTrainer.team.splice(index,1);
        }
      })
    })
  }

  addPokemon = (name: string) => {
    name = name.toLocaleLowerCase();
    this.pokemonService.getPokemonByName(name).then(pokemon => {
      if (pokemon !== undefined){
        if (pokemon.id <= 151){
                  this.trainerService.addPokemonToTrainer({pokemonId: pokemon.id, trainerId: this.selectedTrainer.id}).subscribe(pokemonRaw =>
          {
            this.addPokemonInput = false;
            this.selectedTrainer.team.push({id: pokemonRaw.id, pokemonId: pokemonRaw.pokemonId, pokemon});
            this.pokemonToAdd = "";
          })
        }else{
          alert("only first-gen pokemon allowed")
        }
      }
    },
    error => alert(name + " does not exist :C"));
  };


  activateInput(): void{
    this.addPokemonInput = true;
  }

  checkEnter(event: KeyboardEvent):void{
    if (event.key === 'Enter'){
      this.addPokemon(this.pokemonToAdd);
    }
  }
}
