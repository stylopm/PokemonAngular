import { Component } from '@angular/core';
import { PokemonFormComponent } from '@components/pokemon-form/pokemon-form.component'

@Component({
  selector: 'app-edit-pokemon',
  imports: [PokemonFormComponent],
  templateUrl: './edit-pokemon.component.html',
  styleUrl: './edit-pokemon.component.css'
})
export class EditPokemonComponent {

}
