import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";

import { AppComponent } from "./app.component";
import { CreatePokemonComponent } from "./create-pokemon/create-pokemon.component";
import { PokemonCardComponent } from "./pokemon-card/pokemon-card.component";

@NgModule({
  declarations: [AppComponent, CreatePokemonComponent, PokemonCardComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
