import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TrainerService} from '../../services/trainer.service';

@Component({
  selector: 'app-trainer-create',
  templateUrl: './trainer-create.component.html',
  styleUrls: ['./trainer-create.component.css']
})
export class TrainerCreateComponent implements OnInit {
  form: FormGroup;
  nameField: FormControl;
  hobbyField: FormControl;
  ageField: FormControl;
  photoField: FormControl;

  @Output() trainerCreated = new EventEmitter();

  constructor(private trainerService: TrainerService) {
    this.nameField = new FormControl('', [Validators.required]);
    this.hobbyField = new FormControl('', [Validators.required]);
    this.ageField = new FormControl('', [Validators.required, Validators.pattern(/[0-9]+$/), Validators.max(80), Validators.min(15)]);
    this.photoField = new FormControl('', [Validators.required]);
    this.form = new FormGroup({
      name: this.nameField,
      hobby: this.hobbyField,
      age: this.ageField,
      photo: this.photoField
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // tslint:disable-next-line:max-line-length
    this.trainerService.postSimpleTrainer({name: this.nameField.value, hobby: this.hobbyField.value, age: this.ageField.value, imageUrl: this.photoField.value }).subscribe();
    this.trainerCreated.emit();
    this.form.reset();
  }
}
