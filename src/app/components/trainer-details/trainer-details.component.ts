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

  constructor(
    private trainerService: TrainerService,
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getTrainerById();
  }

  private getTrainerById(): void {
    this.activatedRoute.params.subscribe(params => {
      const postId = +params.id;
      this.trainerService.getTrainerById(postId).subscribe((trainer) => {
        trainer.team.forEach((pokemonInfo, index) => {
          this.pokemonService.getPokemonById(pokemonInfo.pokemonId)
            .then((pokemonRaw) => {
              trainer.team[index].pokemon = this.pokemonService.parsePokemonRaw(pokemonRaw);
            });
        });
        this.trainer = trainer;
      });
    });
  }



}
