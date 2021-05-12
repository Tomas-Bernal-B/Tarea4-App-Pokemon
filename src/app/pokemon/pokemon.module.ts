import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
 
@NgModule({
 declarations: [PokemonComponent],
 imports: [
   CommonModule,
   IonicModule,
   FormsModule
 ],
 exports: [PokemonComponent]
})
export class ComponentsModule { }