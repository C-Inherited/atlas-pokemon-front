import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor() {}

  isTrainerShown = false;

  showAppTrainerList(): void {
    this.isTrainerShown = true;
  }

  home(): void {
    this.isTrainerShown = false;
  }
}
