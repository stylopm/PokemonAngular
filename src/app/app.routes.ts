import { EditPokemonComponent } from '@pages/pokemon-edit-page/pokemon-edit-page';
import { PokemonCreateComponent } from '@pages/pokemon-create-page/pokemon-create-page';
import { PokemonListPageComponentComponent } from '@pages/pokemon-list-page/pokemon-list-page.component';
import { Routes } from '@angular/router';
import { SessionNotFoundComponent } from '@pages/session-not-found/session-not-found.component';

export const routes: Routes = [
  { path: '', component: PokemonListPageComponentComponent },
  { path: 'pokemon/new', component: PokemonCreateComponent },  
  { path: 'pokemon/edit/:id', component: EditPokemonComponent },
  { path: 'session-not-found', component: SessionNotFoundComponent },
  { path: '**', redirectTo: 'session-not-found' },
];
