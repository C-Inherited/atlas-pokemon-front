import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { TrainerListComponent } from './components/trainer-list/trainer-list.component';
import { TrainerDetailsComponent } from './components/trainer-details/trainer-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailsComponent,
    TrainerListComponent,
    TrainerDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
