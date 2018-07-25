import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.css"]
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon;
  @Input() weight;
  @Input() height;
  @Input() nickName;
  @Input() image;

  constructor() {}

  ngOnInit() {}
}
