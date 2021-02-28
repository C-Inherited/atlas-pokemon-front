import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Trainer} from '../common/trainer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private id = 1;
  private baseUrl = 'http://localhost:8080';
  private pokemon = '/pokemon';
  private listOfTrainersUrl = this.baseUrl+'/trainers';
  private completeTrainerByIdUrl = this.baseUrl+'/trainer/';
  private postSimpleTrainerUrl = this.baseUrl+'/trainer';
  private pokemonCompleteUrl = this.baseUrl+this.pokemon;
  

  constructor(private httpClient: HttpClient) {
  }


  getTrainers(): Observable<TrainerSimple[]> {
    return this.httpClient.get<TrainerSimple[]>(this.listOfTrainersUrl);
  }

  getCompleteTrainers(): Observable<TrainerComplete[]> {
    return this.httpClient.get<TrainerComplete[]>(this.listOfTrainersUrl+this.pokemon);
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

  postSimpleTrainer(body: {id: number, name: string, hobby: string, age: number, imageUrl: string}):Observable<Object>{
    return this.httpClient.post(this.postSimpleTrainerUrl, body);
  }

  deleteTrainer(id: number): Observable<any>{
    return this.httpClient.delete(this.completeTrainerByIdUrl+id)
  }

  addPokemonToTrainer(body: {pokemonId: number, trainerId: number}):Observable<Object>{ // pokemon id = species id (not unique)
    return this.httpClient.post(this.pokemonCompleteUrl, body);
  }

  deletePokemonFromTeam(id: number): Observable<any>{  // database id (primary key)
    return this.httpClient.delete(this.pokemonCompleteUrl +'/'+id)
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
  team: {
    id: number;
    pokemonId: number;
  }[]
}