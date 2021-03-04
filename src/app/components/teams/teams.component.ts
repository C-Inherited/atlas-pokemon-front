import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/common/interfaces';
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

  constructor(
    private trainerService: TrainerService,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.listTrainers();
  }

  private listTrainers(): Trainer[] | void {
    this.trainers = [];
    this.trainerService
      .getTrainers()
      .subscribe((trainerList) => {
        this.trainers = trainerList;
        return trainerList;
      });
    
  }
}
