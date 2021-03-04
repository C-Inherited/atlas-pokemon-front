import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer.service';
import { Trainer} from '../../common/interfaces';
import { PokemonService } from '../../services/pokemon.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-trainer-details',
  templateUrl: './trainer-details.component.html',
  styleUrls: ['./trainer-details.component.css'],
})
export class TrainerDetailsComponent implements OnInit {

  trainer: Trainer;
  trainers: Trainer[];
  selectedTrainer!: Trainer;



  constructor(
    private trainerService: TrainerService,
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getTrainerById();
  }

  private async getTrainerById(): Promise<void> {
    this.activatedRoute.params.subscribe(async params => {
      const postId = +params.id;
      await this.trainerService.getTrainerById(postId).then((trainer) => {
        trainer.team.forEach((pokemonInfo, index) => {
          this.pokemonService.getPokemonById(pokemonInfo.pokemonId)
            .then((pokemonRaw) => {
              trainer.team[index].pokemon = pokemonRaw;
            });
        });
        this.trainer = trainer;
      });
    });
  }

  async listTrainers(): Promise<void> {
    this.trainers = [];
    (await this.trainerService.getTrainers().then((trainerList) => {
      this.trainers = trainerList;
    }));
  }
}
