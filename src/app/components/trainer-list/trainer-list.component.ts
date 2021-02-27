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
    this.trainerService.getTrainers().subscribe((simpleTrainersList) => {
      for (const simpleTrainer of simpleTrainersList) {
        this.trainers.push(new Trainer(simpleTrainer.id, simpleTrainer.name, simpleTrainer.hobby,
          simpleTrainer.age, simpleTrainer.imageUrl));
      }
    });
  }

}
