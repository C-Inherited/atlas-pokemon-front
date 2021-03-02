import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { TrainerListComponent } from './components/trainer-list/trainer-list.component';
import { TrainerDetailsComponent } from './components/trainer-details/trainer-details.component';
import { FormsModule } from '@angular/forms';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonTrainerListComponent } from './pokemon-trainer-list/pokemon-trainer-list.component';
import { PokemonTrainerDetailsComponent } from './pokemon-trainer-details/pokemon-trainer-details.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailsComponent,
    TrainerListComponent,
    TrainerDetailsComponent,
    PokemonListComponent,
    PokemonTrainerListComponent,
    PokemonTrainerDetailsComponent,
    PokedexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
