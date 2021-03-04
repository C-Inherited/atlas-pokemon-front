import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Trainer} from '../../common/interfaces';
import { TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})

export class TrainerListComponent implements OnInit {
  trainers: Trainer[] = [];

  openForm = false;

  @Output() showTrainerDetailsEvent = new EventEmitter();

  constructor(private trainerService: TrainerService) {}

  ngOnInit(): void {
    this.listTrainers();
  }

  private listTrainers(): void {
    this.trainers = [];
    this.trainerService
      .getTrainers()
      .subscribe((trainerList) => {
        this.trainers = trainerList;
      });
  }

  trainerCreated(): void {
    this.listTrainers();
    this.openForm = false;
  }

  createTrainer(): void{
    this.openForm = true;
  }
}
