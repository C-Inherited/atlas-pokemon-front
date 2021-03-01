import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  @Output() showTrainerDetailsEvent = new EventEmitter();

  constructor(private trainerService: TrainerService) {
  }

  ngOnInit(): void {
    this.listTrainers();
  }

  private listTrainers(): void {
    this.trainers = [];
    this.trainerService.getCompleteTrainers().subscribe((simpleTrainersList) => {
      for (const simpleTrainer of simpleTrainersList) {
        let team = [];
        for (const simplePokemon of simpleTrainer.team) {
            team.push({id: simplePokemon.id, pokemonId: simplePokemon.pokemonId})
        }
        let trainer = new Trainer(simpleTrainer.id, simpleTrainer.name, simpleTrainer.hobby,
          simpleTrainer.age, simpleTrainer.imageUrl)
        trainer.team = team;
        this.trainers.push(trainer);
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
    this.trainerService.addPokemonToTrainer(pokemon).subscribe(result => {
      this.listTrainers();
    })
  }

  deletePokemon(id: number):void {
    this.trainerService.deletePokemonFromTeam(id).subscribe(result => {
      this.listTrainers();
    })
  }

  showTrainerDetails(index: number):void{
    this.trainers.forEach(trainer => trainer.showTeam = false);
    this.trainers[index].showTeam = true;
    this.showTrainerDetailsEvent.emit(this.trainers[index]);
  }

}