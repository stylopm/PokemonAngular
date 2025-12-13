import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pokemon } from '@models/pokemon.model';
import { PokemonService } from '@services/pokemon.service';

@Component({
  selector: 'app-pokemon-list-page-component',
  imports: [CommonModule],
  templateUrl: './pokemon-list-page-component.component.html',
  styleUrl: './pokemon-list-page-component.component.css',
})
export class PokemonListPageComponentComponent {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.loadPokemons();
  }


  loadPokemons(): void {
    this.pokemonService.getPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }

}
