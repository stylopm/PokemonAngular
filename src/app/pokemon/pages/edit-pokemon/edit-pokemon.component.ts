import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pokemon } from '@models/pokemon.model';
import { PokemonFormComponent } from '@components/pokemon-form/pokemon-form.component';
import { PokemonService } from '@services/pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  imports: [CommonModule, PokemonFormComponent],
  templateUrl: './edit-pokemon.component.html',
  styleUrl: './edit-pokemon.component.css',
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

