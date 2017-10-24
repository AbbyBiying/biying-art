import { Component, OnInit } from '@angular/core';
import { Favorite } from './favorite';
import { ArtService } from '../animations/art.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})

export class FavoritesComponent implements OnInit {
  favorites: Favorite[];
  selectedFavorite: Favorite;

  constructor(private artService: ArtService) { }

  ngOnInit() {
    this.getFavorites();
  }

  onSelect(favorite: Favorite): void {
    this.selectedFavorite = favorite;
  }

  getFavorites(): void {
    this.artService.getFavorites()
        .subscribe(favorites => this.favorites = favorites);
  }

}
