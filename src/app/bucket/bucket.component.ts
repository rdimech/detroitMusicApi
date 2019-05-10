import { Component, Input, OnInit } from '@angular/core';
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
@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css'],
})
export class BucketListPageComponent implements OnInit {
  list: MapArray[];
  favorites: any[];
  errorMessage: string;
  searchKeyword: string = '';
  formattedKeyword: string;
  favorite: boolean;
  
  
  constructor(private api: Api) { 
  }
  
  ngOnInit() {
    this.api.Favorites.subscribe(list => {
      this.list = list;
      console.log(list, this.list);
    });
    }

  saveFavorite = (index) => {
    this.list[index].favorite = this.list[index].favorite = true;
    
  };

  removeFavorite = (index) => {
    this.list[index].favorite = this.list[index].favorite = false;
    this.list.splice(index, 1);
    this.api.addFavorite(this.list);

  };
}
