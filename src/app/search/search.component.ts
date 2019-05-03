import { Component } from '@angular/core';
import { Api } from '../services/api.service'

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
  _embedded:  {
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
  list: object[];
  errorMessage: string;

  constructor(private api: Api) {}

  getAllEvents = () => {
    this.api.getEvents().subscribe((data: ApiData) => {
      console.log(data);
       this.list = data._embedded.events;
       this.errorMessage = null;
    }, 
    error => {
      this.errorMessage = error.message;
    }
    );
  };
}
