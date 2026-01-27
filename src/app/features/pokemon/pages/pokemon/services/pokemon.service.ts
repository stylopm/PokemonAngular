import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '@models/pokemon.model';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = `${environment.apiUrl}/Pokemons`;
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl);
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${id}`);
  }

  createPokemon(pokemon: Pokemon): Observable<Pokemon> {
    let data = {
      name: pokemon.name,
      type: pokemon.type,
      level: pokemon.level,
      hp: pokemon.hp,
    };
    return this.http.post<Pokemon>(this.apiUrl, data);
  }

  updatePokemon(id: number, pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${this.apiUrl}/${id}`, pokemon);
  }

  deletePokemon(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
