import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import {TrainerDetailsComponent} from './components/trainer-details/trainer-details.component';
import {HomeComponentComponent} from './components/home-component/home-component.component';
import {TrainerListComponent} from './components/trainer-list/trainer-list.component';
import {PokemonDetailsComponent} from './components/pokemon-details/pokemon-details.component';
import {PokedexComponent} from './components/pokedex/pokedex.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent
  },
  {
    path: 'trainers',
    component: TrainerListComponent
  },
  {
    path: 'trainers/:id',
    component: TrainerDetailsComponent
  },
  {
    path: 'trainers/:id/:idPokemon',
    component: PokemonDetailsComponent
  },
  {
    path: 'pokedex',
    component: PokedexComponent
  },
  {
    path: 'pokedex/:id',
    component: PokedexComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'teams/:id',
    component: TeamsComponent
  }

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
