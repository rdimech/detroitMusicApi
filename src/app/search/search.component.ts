import { Component } from '@angular/core';
import { Api } from '../services/api.service'

interface MapArray {
  name: string;
  url: string;
  startTime: string;
  favorite: boolean;
}

interface Events {
  name: string;
  url: string;
  dates: {
    start: {
      dateTime: string;
    }
  }
}

interface ApiData {
  _embedded: {
    events: Events[];
  }
}


@Component({
  selector: 'searchCriteria',
  templateUrl: './search.component.html',
  styleUrls: [],
  providers: [Api]
})

export class SearchCriteriaComponent {
  title = 'Search';
  list: MapArray[];
  errorMessage: string;
  searchKeyword: string = '';
  formattedKeyword: string;
  favorite: boolean;

  constructor(private api: Api) { }

  getAllEvents = () => {
    this.formattedKeyword = this.searchKeyword.replace(/ /g, '+');
    this.api.getEvents(this.formattedKeyword).subscribe((data: ApiData) => {
      // console.log(data);
      this.list = data._embedded.events.map(event => {
        return { name: event.name, url: event.url, startTime: event.dates.start.dateTime, favorite: false }
      });
      console.log(this.list);
      this.errorMessage = null;
      this.searchKeyword = '';
    },
      error => {
        this.errorMessage = error.message;
      }
    );
  };

  saveFavorite = (index) => {
    this.list[index].favorite = !this.list[index].favorite;
  };
}
