import {Component, OnInit} from '@angular/core';
import {Trainer} from '../../common/trainer';
import {TrainerService} from '../../services/trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {

  trainers: Trainer[] = [];
  trainer: Trainer;

  constructor(private trainerService: TrainerService) {
  }

  ngOnInit(): void {
    this.listTrainers();
  }

  private listTrainers(): void {
    this.trainers = [];
    this.trainerService.getCompleteTrainers().subscribe((simpleTrainersList) => {
      for (const simpleTrainer of simpleTrainersList) {
        this.trainers.push(new Trainer(simpleTrainer.id, simpleTrainer.name, simpleTrainer.hobby,
          simpleTrainer.age, simpleTrainer.imageUrl));
      }
    });
  }

  postTrainer(trainer: {id: number, name: string, hobby: string, age: number, imageUrl: string}): void{
    this.trainerService.postSimpleTrainer(trainer).subscribe(result => {
      this.listTrainers();
    })
  }

  deleteTrainer(id: number): void{
    this.trainerService.deleteTrainer(id).subscribe(result => {
      this.listTrainers();
    })
  }

  addPokemon(pokemon: {pokemonId: number, trainerId: number}): void{
    this.trainerService.addPokemonToTrainer(pokemon).subscribe(result => {})
  }

  deletePokemon(id: number):void {
    this.trainerService.deletePokemonFromTeam(id).subscribe(result => {})
  }

}
