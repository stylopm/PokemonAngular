import { Component } from '@angular/core';
import { PokemonFormComponent } from '@components/pokemon-form/pokemon-form.component'

@Component({
  selector: 'app-create-pokemon',
  imports: [PokemonFormComponent],
  templateUrl: './create-pokemon.component.html',
  styleUrl: './create-pokemon.component.css'
})
export class CreatePokemonComponent {

}
