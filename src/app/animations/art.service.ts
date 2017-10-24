import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Favorite } from '../favorites/favorite';
import { FAVORITE } from '../favorites/favorite-list';

@Injectable({
  providedIn: 'root',
})

export class ArtService {
  constructor(private messageService: MessageService) { }

  toggle(state: string): string {
    return state === 'active' ? 'inactive' : 'active';
  }

  getFavorites(): Observable<Favorite[]> {
    this.messageService.add('ArtService: fetched Favorites');
    return of(FAVORITE);
  }
}