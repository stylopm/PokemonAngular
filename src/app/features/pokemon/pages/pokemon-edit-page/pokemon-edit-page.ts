import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pokemon } from '@domain/pokemon.model';
import { PokemonFormComponent } from '@components/pokemon-form/pokemon-form.component';
import { PokemonService } from '@data-access/pokemon.service';

@Component({
  selector: 'app-pokemon-edit',
  imports: [CommonModule, PokemonFormComponent],
  templateUrl: './pokemon-edit-page.html',
  styleUrl: './pokemon-edit-page.css',
})
export class EditPokemonComponent {
  pokemonGet: Pokemon | null = null;
  constructor(
    private route: ActivatedRoute,
    private ps:PokemonService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPokemonGet(id);
  }

  private loadPokemonGet(id: number){
    this.ps.getPokemonById(id).subscribe(
      (pokemon) => this.pokemonGet = pokemon
    )
  }
}

