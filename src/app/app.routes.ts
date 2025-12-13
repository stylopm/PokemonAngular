import { CreatePokemonComponent } from '@pages/create-pokemon/create-pokemon.component';
import { EditPokemonComponent } from '@pages/edit-pokemon/edit-pokemon.component';
import { PokemonDetailPageComponentComponent } from '@components/pokemon-detail-page-component/pokemon-detail-page-component.component';
import { PokemonListPageComponentComponent } from '@pages/pokemon-list-page-component/pokemon-list-page-component.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: PokemonListPageComponentComponent },
  { path: 'pokemon/:id', component: PokemonDetailPageComponentComponent },
  { path: 'pokemon/new', component: CreatePokemonComponent },
  { path: 'pokemon/:id/edit', component: EditPokemonComponent },
];
