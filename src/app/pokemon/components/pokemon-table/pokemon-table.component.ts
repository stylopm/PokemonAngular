import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Pokemon } from '@models/pokemon.model';
import { PokemonService } from '@services/pokemon.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-table',
  imports: [CommonModule, RouterLink],
  templateUrl: './pokemon-table.component.html',
  styleUrl: './pokemon-table.component.css',
})
export class PokemonTableComponent {
  constructor(private ps: PokemonService) {}
  @Input() pokemons: Pokemon[] = [];
  @Output() deleted = new EventEmitter<number>();
  deletePokemon(id: number) {
    this.ps.deletePokemon(id).subscribe({
      next: () => {
        this.deleted.emit(id); // 👈 aquí notificas
      },
      error: (err) => console.error(err),
    });
  }
}
