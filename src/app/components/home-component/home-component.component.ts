import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

url: string = 'https://youtu.be/wvy-pO65GhQ?autoplay=1&mute=1&loop=1&controls=0';
safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
  }


}
