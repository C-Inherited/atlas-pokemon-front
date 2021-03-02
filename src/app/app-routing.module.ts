import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import {TrainerListComponent} from './components/trainer-list/trainer-list.component';
import {TrainerDetailsComponent} from './components/trainer-details/trainer-details.component';

const routes: Routes = [
  {
    path: 'trainer',
    component: TrainerDetailsComponent
  },
  {
    path: 'trainer/:trainerId',
    component: TrainerDetailsComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
