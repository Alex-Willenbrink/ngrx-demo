import { Component, OnInit } from "@angular/core";

import { pokemonOptions } from "./pokemon-options";

@Component({
  selector: "create-pokemon",
  templateUrl: "./create-pokemon.component.html",
  styleUrls: ["./create-pokemon.component.css"]
})
export class CreatePokemonComponent implements OnInit {
  createdPokemons: any[] = [];
  pokemonOptions: any[] = pokemonOptions;

  constructor() {}

  ngOnInit() {}

  onSubmit(value: any): void {
    value["image"] = this.getPokemonImage(value.pokemon);
    this.createdPokemons.push(value);
  }

  getPokemonImage(pokemon: string): string {
    return pokemonOptions.filter(
      pokeInstance => pokeInstance["name"] === pokemon
    )[0]["image"];
  }
}
