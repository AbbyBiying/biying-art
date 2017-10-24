import { Component, OnInit, Input } from '@angular/core';
import { Favorite } from '../favorites/favorite';

@Component({
  selector: 'app-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.scss']
})
export class FavoriteDetailComponent implements OnInit {
  @Input() favorite: Favorite;
  
  constructor() { }

  ngOnInit() {
  }

}
