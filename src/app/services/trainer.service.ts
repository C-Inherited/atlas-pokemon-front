import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SimpleTrainer, Trainer} from '../common/interfaces';
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
  private result: any;

  constructor(private http: HttpClient) {
  }

  async getTrainers(): Promise<Trainer[]> {
    const data = this.http.get<Trainer[]>(this.listOfTrainersUrl + this.pokemon).toPromise();
    return await data;
  }

  async getTrainerById(id: number): Promise<Trainer> {
    this.id = id;
    const data = this.http.get<Trainer>(this.completeTrainerByIdUrl + id + this.pokemon).toPromise();
    return await data;
  }

  postSimpleTrainer(body: SimpleTrainer): Observable <SimpleTrainer>{
    return this.http.post<SimpleTrainer>(this.postSimpleTrainerUrl, body);
  }

  deleteTrainer(id: number): Observable<any>{
    return this.http.delete(this.completeTrainerByIdUrl + id);
  }

  addPokemonToTrainer(body: {pokemonId: number, trainerId: number}): Observable <Object>{ // pokemon id = species id (not unique)
    return this.http.post(this.pokemonCompleteUrl, body);
  }

  deletePokemonFromTeam(id: number): Observable<any>{  // database id (primary key)
    return this.http.delete(this.pokemonCompleteUrl + '/' + id);
  }
}

