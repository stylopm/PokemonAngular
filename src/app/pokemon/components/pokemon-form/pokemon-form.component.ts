import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class PokemonFormComponent implements OnChanges {
  @Input() pokemon: Pokemon | null = null;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ps: PokemonService,
    private router: Router,
  ) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon']?.currentValue) {
      this.form.patchValue(changes['pokemon'].currentValue);
    }
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
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const pokemonValue: Pokemon = this.form.value;

    if (this.pokemon) {
      const id = this.pokemon?.id ?? pokemonValue.id;
      if (id != null) {
        this.ps
          .updatePokemon(id, { ...pokemonValue, id })
          .subscribe((pokemonNew) => {
            this.router.navigate(['/']);
          });
      }
    } else {
      this.ps.createPokemon(pokemonValue).subscribe((pokemonNew) => {
        this.router.navigate(['/']);
      });
    }
  }
}
