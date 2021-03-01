import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'atlas-pokemon-front';

  constructor() {}

  isTrainerShown: boolean = false;

  showAppTrainerDetails(): void {
    this.isTrainerShown = true;
  }

  home(): void {
    this.isTrainerShown = false;
  }
}
