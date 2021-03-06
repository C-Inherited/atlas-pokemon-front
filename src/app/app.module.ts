import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { TrainerListComponent } from './components/trainer-list/trainer-list.component';
import { TrainerDetailsComponent } from './components/trainer-details/trainer-details.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponentComponent } from './components/nav-bar-component/nav-bar-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrainerCreateComponent } from './components/trainer-create/trainer-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamsSelectedPokemonComponent } from './components/teams-selected-pokemon/teams-selected-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailsComponent,
    TrainerListComponent,
    TrainerDetailsComponent,
    PokedexComponent,
    NavBarComponentComponent,
    HomeComponentComponent,
    FooterComponent,
    TrainerCreateComponent,
    TeamsComponent,
    TeamsSelectedPokemonComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
