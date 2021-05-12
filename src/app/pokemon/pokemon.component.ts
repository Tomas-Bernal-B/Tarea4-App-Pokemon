import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  name: string;
  urlImage : string;
  variocolor : string;
  nombre : string;
  numero : number;
  tipo1 : string;
  tipo2 : string;
  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
  }

  search(){
    this.pokemonService.getapi(this.name).subscribe(response =>{
      this.urlImage = response.sprites.front_default 
      this.variocolor = response.sprites.front_shiny
      this.nombre = response.name
      this.numero = response.id
      this.tipo1 = response.types[0].type.name
      this.tipo2 = response.types[1].type.name
      console.log(response)
    })
  }
  
  }
  

