import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Pokemon } from '@models/pokemon.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-table',
  imports: [CommonModule, RouterLink],
  templateUrl: './pokemon-table.component.html',
  styleUrl: './pokemon-table.component.css'
})
export class PokemonTableComponent {
  @Input() pokemons: Pokemon[] = [];
}
