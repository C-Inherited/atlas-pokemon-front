import {Component, OnInit} from '@angular/core';
import {TrainerService} from '../../services/trainer.service';
import {Trainer} from '../../common/trainer';
import {PokemonService} from '../../services/pokemon.service';

@Component({
  selector: 'app-trainer-details',
  templateUrl: './trainer-details.component.html',
  styleUrls: ['./trainer-details.component.css']
})
export class TrainerDetailsComponent implements OnInit {

  trainer = new Trainer(0, '', '', 0, '');

  constructor(private trainerService: TrainerService, private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    // this.getTrainerById(2);
    this.getCompleteTrainerById(1);
  }

  private getTrainerById(id: number): void {
    this.trainerService.getTrainerById(id).subscribe((trainer) => {
      console.log(trainer);
      this.trainer = new Trainer(trainer.id, trainer.name, trainer.hobby, trainer.age, trainer.imageUrl);
    });
  }

  private getCompleteTrainerById(id: number): void {
    this.trainerService.getCompleteTrainerById(id).subscribe((trainer) => {
      console.log(trainer);
      this.trainer = new Trainer(trainer.id, trainer.name, trainer.hobby, trainer.age, trainer.imageUrl);
      //todo need to implement the algorithm to parse the id from the service response and call the pookemon service to get the complete pokemon datas
    });
  }

}
