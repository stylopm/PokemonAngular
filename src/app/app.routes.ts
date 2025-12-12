import { PokemonListPageComponentComponent } from '../app/pokemon/components/pokemon-list-page-component/pokemon-list-page-component.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: PokemonListPageComponentComponent },
  //{ path: 'new', component: PokemonCreateComponent },
  //{ path: ':id/edit', component: PokemonEditComponent },
  //{ path: ':id', component: PokemonDetailComponent },
];
