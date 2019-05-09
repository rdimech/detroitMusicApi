import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class Api {
    apiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=266&apikey=MLpkpoNrpU9DB47T6zAKab7EA4bcgRqR'
    private _favorites = new BehaviorSubject<[]>([]);
    Favorites: Observable<[]> = this._favorites.asObservable(); 
    get favorites () {
        return this._favorites.getValue();
    }
    constructor(private http: HttpClient) {}
    getEvents = (formattedKeyword) => this.http.get(this.apiUrl + '&keyword=' + formattedKeyword);

    addFavorite = nextState => this._favorites.next(nextState)
}