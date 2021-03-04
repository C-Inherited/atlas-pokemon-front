import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Trainer} from '../../common/interfaces';
import {TrainerService} from '../../services/trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})

export class TrainerListComponent implements OnInit {
  trainers: Trainer[] = [];
  numberOfColumns: number;

  openForm = false;

  @Output() showTrainerDetailsEvent = new EventEmitter();

  constructor(private trainerService: TrainerService) {}

  async ngOnInit(): Promise<void> {
   await this.listTrainers();
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

  trainerCreated(): void {
    this.listTrainers();
    this.openForm = false;
  }

  createTrainer(): void{
    this.openForm = true;
  }
}
