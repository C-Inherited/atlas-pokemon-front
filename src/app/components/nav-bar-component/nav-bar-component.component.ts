import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-component',
  templateUrl: './nav-bar-component.component.html',
  styleUrls: ['./nav-bar-component.component.css']
})
export class NavBarComponentComponent implements OnInit {
  title = 'atlas-pokemon-front';

  isTrainerShown = false;

  constructor() { }

  ngOnInit(): void {
  }

  home(): void {
    this.isTrainerShown = false;
  }

}
