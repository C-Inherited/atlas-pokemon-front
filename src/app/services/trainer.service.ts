import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Trainer} from '../common/trainer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private id = 1;
  private listOfTrainersUrl = 'http://localhost:8080/trainers';
  private completeTrainerByIdUrl = 'http://localhost:8080/trainer/';
  private pokemon = '/pokemon';

  constructor(private httpClient: HttpClient) {
  }

  getTrainers(): Observable<TrainerSimple[]> {
    return this.httpClient.get<TrainerSimple[]>(this.listOfTrainersUrl);
  }

  getTrainerById(id: number): Observable<TrainerSimple> {
    this.id = id;
    console.log(id);
    console.log(this.completeTrainerByIdUrl);
    return this.httpClient.get<TrainerSimple>(this.completeTrainerByIdUrl + id);
  }



  getCompleteTrainerById(id: number): Observable<TrainerComplete> {
    this.id = id;
    console.log(id);
    console.log(this.completeTrainerByIdUrl);
    return this.httpClient.get<TrainerComplete>(this.completeTrainerByIdUrl + id + this.pokemon);
  }

}

interface TrainerSimple {
  id: number;
  name: string;
  hobby: string;
  age: number;
  imageUrl: string;
}

interface Team {
  team: PokemonSimple[];
}

interface PokemonSimple {
  id: number;
  pokemonId: number;
}

interface TrainerComplete {
  id: number;
  name: string;
  hobby: string;
  age: number;
  imageUrl: string;
  team: Team;
}

