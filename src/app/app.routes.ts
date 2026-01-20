import { CreatePokemonComponent } from '@pages/create-pokemon/create-pokemon.component';
import { EditPokemonComponent } from '@pages/edit-pokemon/edit-pokemon.component';
import { PokemonListPageComponentComponent } from '@pages/pokemon-list-page-component/pokemon-list-page-component.component';
import { Routes } from '@angular/router';
import { SessionNotFoundComponent } from '@pages/session-not-found/session-not-found.component';

export const routes: Routes = [
  { path: '', component: PokemonListPageComponentComponent },
  { path: 'pokemon/new', component: CreatePokemonComponent },  
  { path: 'pokemon/edit', component: EditPokemonComponent },
  { path: 'session-not-found', component: SessionNotFoundComponent },
  { path: '**', redirectTo: 'session-not-found' },
];
