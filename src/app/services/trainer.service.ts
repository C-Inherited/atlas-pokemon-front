import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Trainer} from '../common/interfaces';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TrainerService {
  private id = 1;
  readonly baseUrl = 'https://atlas-pokemon.herokuapp.com';
  private pokemon = '/pokemon';
  private listOfTrainersUrl = this.baseUrl + '/trainers';
  private completeTrainerByIdUrl = this.baseUrl + '/trainer/';
  private postSimpleTrainerUrl = this.baseUrl + '/trainer';
  private pokemonCompleteUrl = this.baseUrl + this.pokemon;

  constructor(private httpClient: HttpClient) {
  }

  getTrainers(): Observable<Trainer[]> {
    return this.httpClient.get<Trainer[]>(this.listOfTrainersUrl + this.pokemon);
  }

  getTrainerById(id: number): Observable<Trainer> {
    this.id = id;
    return this.httpClient.get<Trainer>(this.completeTrainerByIdUrl + id + this.pokemon);
  }

  postSimpleTrainer(body: {id: number, name: string, hobby: string, age: number, imageUrl: string}): Observable <Object>{
    return this.httpClient.post(this.postSimpleTrainerUrl, body);
  }

  deleteTrainer(id: number): Observable<any>{
    return this.httpClient.delete(this.completeTrainerByIdUrl + id);
  }

  addPokemonToTrainer(body: {pokemonId: number, trainerId: number}): Observable <Object>{ // pokemon id = species id (not unique)
    return this.httpClient.post(this.pokemonCompleteUrl, body);
  }

  deletePokemonFromTeam(id: number): Observable<any>{  // database id (primary key)
    return this.httpClient.delete(this.pokemonCompleteUrl + '/' + id);
  }
}

