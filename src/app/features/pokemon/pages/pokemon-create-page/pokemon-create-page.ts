import { Component } from '@angular/core';
import { PokemonFormComponent } from '@components/pokemon-form/pokemon-form.component'

@Component({
  selector: 'app-create-pokemon',
  imports: [PokemonFormComponent],
  templateUrl: './pokemon-create-page.html',
  styleUrl: './pokemon-create-page.css'
})
export class PokemonCreateComponent {

}
