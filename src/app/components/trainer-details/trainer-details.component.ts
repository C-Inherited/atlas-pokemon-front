import { Component, Input, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer.service';
import { Trainer } from '../../common/trainer';
import { PokemonService } from '../../services/pokemon.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-trainer-details',
  templateUrl: './trainer-details.component.html',
  styleUrls: ['./trainer-details.component.css'],
})
export class TrainerDetailsComponent implements OnInit {
  @Input()
  trainer: Trainer = new Trainer(0, '', '', 0, '');

  showDetails: boolean = false;
  createTrainer: boolean = false;

  name: string = '';
  hobby: string = '';
  age: number = 0;

  constructor(
    private trainerService: TrainerService,
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.getTrainerById(2);
    // this.getCompleteTrainerById(1);
  }

  private getTrainerById(): void {
    const checkHasTrainerId: boolean = this.activatedRoute.snapshot.paramMap.has('trainerId');
    if (checkHasTrainerId){
    const postId: number = Number(this.activatedRoute.snapshot.paramMap.get('trainerId'));
    this.trainerService.getTrainerById(postId).subscribe((trainer) => {
        this.trainer = new Trainer(
          trainer.id,
          trainer.name,
          trainer.hobby,
          trainer.age,
          trainer.imageUrl
        );
      });
    }
  }

  private getCompleteTrainerById(): void {
    const checkHasTrainerId: boolean = this.activatedRoute.snapshot.paramMap.has('trainerId');
    if (checkHasTrainerId) {
      const postId: number = Number(this.activatedRoute.snapshot.paramMap.get('trainerId'));
      this.trainerService.getCompleteTrainerById(postId).subscribe((trainer) => {
        console.log(trainer);
        this.trainer = new Trainer(
          trainer.id,
          trainer.name,
          trainer.hobby,
          trainer.age,
          trainer.imageUrl
        );
        // tslint:disable-next-line:max-line-length
        // todo need to implement the algorithm to parse the id from the service response and call the pookemon service to get the complete pokemon datas
      });
    }
  }

  toggleTrainerCreationMenu(){
    this.createTrainer = true;
  }

  createNewTrainer(){
    this.trainerService.postSimpleTrainer(new Trainer(1, this.name, this.hobby, this.age, ''))
    this.emptyFields();
    this.createTrainer = false;
  }

  emptyFields(){
    this.name = '';
    this.age = 0;
    this.hobby = '';
  }

  cancelTrainerCreation(){
    this.createTrainer = false;
  }
  
  goHome(): void{
    this.router.navigate(['/home']);
  }

  showTrainerDetails(trainer: Trainer): void {
    this.trainer = trainer;
    this.showDetails = true;
  }
}
