import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url : string = "https://pokeapi.co/api/v2/pokemon/"
  constructor(private http: HttpClient) { }

  getapi(name : string){
    return this.http.get<any>(this.url+`${name}`,{})
  }

}
