import {Component, OnInit} from '@angular/core';
import {Trainer} from '../../common/trainer';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {

  trainers: Trainer[];

  constructor() {
  }

  ngOnInit(): void {
    this.listTrainers();
  }

  private listTrainers() {
    let imageUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fideas%2Fimages%2F9%2F9f%2FAsh_ketchum_render_by_tzblacktd-da9k0wb.png%2Frevision%2Flatest%3Fcb%3D20180427162023&f=1&nofb=1';
    this.trainers = [new Trainer(1, 'Ash', 'Meditation', 24, imageUrl), new Trainer(2, 'EvilAsh', 'Baking', 24, imageUrl)];
  }
}
