import { Component, OnInit } from "@angular/core";

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

const pokemonOptions = [
  {
    name: "caterpie",
    weight: 29,
    height: 3,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    types: ["bug"]
  },
  {
    name: "metapod",
    weight: 99,
    height: 7,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    types: ["bug"]
  },
  {
    name: "butterfree",
    weight: 320,
    height: 11,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    types: ["bug", "flying"]
  },
  {
    name: "weedle",
    weight: 32,
    height: 3,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    types: ["bug", "poison"]
  },
  {
    name: "kakuna",
    weight: 100,
    height: 6,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    types: ["bug", "poison"]
  },
  {
    name: "beedrill",
    weight: 295,
    height: 10,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    types: ["bug", "poison"]
  },
  {
    name: "pidgey",
    weight: 18,
    height: 3,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    types: ["normal", "flying"]
  },
  {
    name: "pidgeotto",
    weight: 300,
    height: 11,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    types: ["normal", "flying"]
  },
  {
    name: "pidgeot",
    weight: 395,
    height: 15,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    types: ["normal", "flying"]
  },
  {
    name: "rattata",
    weight: 35,
    height: 3,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    types: ["normal"]
  }
];
