import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'atlas-pokemon-front';

  showAppTrainerDetails(): void {
    let elementTrainer = document.getElementById('app-trainer-details');

    elementTrainer.style.display = 'block';
  }
}
