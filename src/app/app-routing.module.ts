import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import {TrainerListComponent} from './components/trainer-list/trainer-list.component';

const routes: Routes = [
  {
    path: 'trainer',
    component: TrainerListComponent
  },
  {
    path: 'trainer/:trainerId',
    component: TrainerListComponent
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
