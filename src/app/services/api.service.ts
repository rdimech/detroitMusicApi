import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Api {
    apiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=266&apikey=MLpkpoNrpU9DB47T6zAKab7EA4bcgRqR'
    constructor(private http: HttpClient) {}

    getEvents = () => this.http.get(this.apiUrl);
}