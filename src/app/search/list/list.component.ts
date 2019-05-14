import { Component, Input, OnInit } from '@angular/core';
import { Api } from '../../services/api.service'

interface MapArray {
  name: string;
  url: string;
  startTime: string;
  favorite: boolean;
}


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class EventListComponent implements OnInit {
  title = 'Search';
  @Input() list: MapArray[];
  favorites: any[];
  favorite: boolean;



  constructor(private api: Api) { }
  
  ngOnInit() {
    this.api.Favorites.subscribe(list => {
      this.favorites = list
    });
  }
  
  saveFavorite = (index) => {
    this.list[index].favorite = this.list[index].favorite = true;
    this.api.addFavorite([...this.favorites, this.list[index]]);

  };

  removeFavorite = (index) => {
    this.list[index].favorite = this.list[index].favorite = false;
    const favoritesIndex = this.favorites.indexOf(this.list[index]);
    this.favorites.splice(favoritesIndex, 1);
    this.api.addFavorite(this.favorites);

  };
}

