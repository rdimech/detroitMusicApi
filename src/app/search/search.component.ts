import { Component, Output, OnInit  } from '@angular/core';
import { Api } from '../services/api.service'
import { NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core/src/view/provider';

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
})

export class SearchCriteriaComponent implements OnInit {
  title = 'Search';
  list: MapArray[];
  favorites: any[];
  errorMessage: string;
  searchKeyword: string = '';
  formattedKeyword: string;
  searchStartDate: string='';
  formattedStartDate: string='';
  searchEndDate: string='';
  formattedEndDate: string='';
  favorite: boolean;
  locations = [
    {id: "266", name: "Detroit"},
    {id: "286", name: "Grand Rapids-Kalamazoo-Battle Creek"},
    {id: "317", name: "Lansing"}
  ];
  selectedLocation: string="266";


  constructor(private api: Api) { }

  ngOnInit() {
    this.api.Favorites.subscribe(list => {
      this.favorites = list
    });
  }
  getAllEvents = () => {
    if (this.searchStartDate != ''){
      this.formattedStartDate = this.searchStartDate + 'T00:00:00Z';
    };
    if (this.searchEndDate != ''){
      this.formattedEndDate = this.searchEndDate + 'T00:00:00Z';
    };
    this.formattedKeyword = this.searchKeyword.replace(/ /g, '+');
    this.api.getEvents(this.formattedKeyword, this.formattedStartDate, this.formattedEndDate, this.selectedLocation).subscribe((data: ApiData) => {
      // console.log(data);
      if (data._embedded) {
        this.list = data._embedded.events.map(event => {
          return { name: event.name, url: event.url, startTime: event.dates.start.dateTime, favorite: false }
        
        })
        
        this.errorMessage = null;
         
        }
        else  {
          this.errorMessage = 'No Results Found';
          
        };
     
      console.log(this.selectedLocation);
      console.log(this.list);
      this.searchKeyword = '';
      this.searchStartDate='';
      this.searchEndDate='';

    },
      error => {
        this.errorMessage = error.message;
      }
    );
  };

}
