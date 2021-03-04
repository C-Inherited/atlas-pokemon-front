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

  trainersCarousel: Trainer[][] = [];
  openForm = false;

  @Output() showTrainerDetailsEvent = new EventEmitter();

  constructor(private trainerService: TrainerService) {}

  async ngOnInit(): Promise<void> {
   await this.listTrainers();
  }

  async listTrainers(): Promise<Trainer[]> {
    this.trainers = [];
    await this.trainerService.getTrainers().then((trainerList) => {
        this.trainers = trainerList;
        this.trainersCarousel = [];
        let carouselPages: number = Math.floor(this.trainers.length/4)
        let lastPageTrainers: number = this.trainers.length%4
        for (let i=0; i<carouselPages; i++){
          let trainersPage: Trainer[] = [];
          for (let j=0; j<4; j++){
            trainersPage.push(this.trainers[i*4+j])
          }
          this.trainersCarousel.push(trainersPage)
        }
        if (lastPageTrainers > 0){
          let trainersPage: Trainer[] = [];
        for (let i=(carouselPages)*4; i<(carouselPages)*4+lastPageTrainers; i++){
          trainersPage.push(this.trainers[i])
        }
        console.log(trainersPage)
        this.trainersCarousel.push(trainersPage)
        }
        
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
