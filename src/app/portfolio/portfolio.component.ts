import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { artAnimations } from "../animations/art-animations";
import { ArtService } from "../animations/art.service";
import { Favorite } from "../favorites/favorite";
// import { FAVORITE } from '../favorites/favorite-list';
import { Subscription } from "rxjs";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
  animations: artAnimations
})
export class PortfolioComponent implements OnInit {
  constructor(private artService: ArtService) {
    this.collapsed = true;
  }
  color: string;
  selectedCodeValue: string;
  state: string = "inactive";
  collapsed: boolean;
  favorites: Favorite[];
  searchField: string;
  onConfigChanged: Subscription;

  ngOnInit() {}

  toggle() {
    this.state = this.artService.toggle(this.state);
  }
  scroll(el: HTMLElement) {
      el.scrollIntoView();
  }
  openLink() {
    if (this.selectedCodeValue == "ABZ-EXCHANGE") {
      window.open("https://github.com/AbbyBiying/ABZ_EXCHANGE", "ABZ-EXCHANGE");
    }
    if (this.selectedCodeValue == "PAIRING") {
      window.open("https://github.com/AbbyBiying/pairing", "Pairing");
    }
    if (this.selectedCodeValue == "BIYING-ART") {
      window.open("https://github.com/AbbyBiying/biying-art", "Biying-Art");
    }
  }
}
