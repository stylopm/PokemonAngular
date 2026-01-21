import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Pokemon } from '@models/pokemon.model';
import { PokemonService } from '@services/pokemon.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.less',
})
export class PokemonFormComponent {
  @Input() pokemon?: Pokemon;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ps: PokemonService,
    private router: Router
  ) {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(2)]],
      type: ['', Validators.required],
      level: [
        null,
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
      hp: [null, [Validators.required, Validators.min(1), Validators.max(999)]],
    });

    if (this.pokemon) {
      this.form.patchValue(this.pokemon);
    }
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const pokemon: Pokemon = this.form.value;
    this.ps.createPokemon(pokemon).subscribe(
      (pokemonNew) => {
        alert(`Pokemon new ${pokemonNew.id} ${pokemonNew.name}`   )
        this.router.navigate(['/']);
      }
    );
  }
}
