import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";

import { NumberValidatorDirective } from "./shared/number-validator.directive";

import { AppComponent } from "./app.component";
import { CreatePokemonComponent } from "./create-pokemon/create-pokemon.component";
import { PokemonCardComponent } from "./pokemon-card/pokemon-card.component";

@NgModule({
  declarations: [
    AppComponent,
    CreatePokemonComponent,
    PokemonCardComponent,
    NumberValidatorDirective
  ],
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
