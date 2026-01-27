import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pokemon } from '@models/pokemon.model';
import { PokemonService } from '@services/pokemon.service';
import { PokemonTableComponent } from '@components/pokemon-table/pokemon-table.component';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-pokemon-list-page',
  imports: [CommonModule, PokemonTableComponent],
  templateUrl: './pokemon-list-page.component.html',
  styleUrl: './pokemon-list-page.component.css',
})
export class PokemonListPageComponentComponent {
  pokemons: Pokemon[] = [];
  loading = true;
  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.loadPokemons();
  }

  onPokemonDeleted(id: number) {
    this.loadPokemons();
  }
  loadPokemons(): void {
    this.loading = true;
    this.pokemonService
      .getPokemons()
      .pipe(
        finalize(() => {
          this.loading = false;
        }),
      )
      .subscribe({
        next: (pokemons) => {
          this.pokemons = pokemons;
          this.loading = false;
        },
        error: (error) => {
          console.error(error);
          this.loading = false;
        },
      });
  }
}
