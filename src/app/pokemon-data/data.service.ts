import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon';
  constructor(
    private http: HttpClient
  ) { }
  getAllPokemons(){
    return this.http.get(`${this.pokeapiUrl}?limit=10000`);
  }
  getPokemons(limit: number, offset: number){
    return this.http.get(`${this.pokeapiUrl}?limit=${limit}&offset=${offset}`);
  }
  getMoreData(name: string) {
    return this.http.get(`${this.pokeapiUrl}/${name}`)
  }
}
