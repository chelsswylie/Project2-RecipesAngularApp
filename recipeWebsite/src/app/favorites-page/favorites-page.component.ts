import { Component, OnInit } from '@angular/core';
import { MyFavs } from '../my-favs';
import { from } from 'rxjs';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
})
export class FavoritesPageComponent implements OnInit {
  myFavorites: MyFavs[] = [
    {
      Title: '',
      Calories: 0,
      Dietary: '',
      link: '',
    },
    {
      Title: '',
      Calories: 0,
      Dietary: '',
      link: '',
    },
    {
      Title: '',
      Calories: 0,
      Dietary: '',
      link: '',
    },
    {
      Title: '',
      Calories: 0,
      Dietary: '',
      link: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // addTitle = (newTitle) => {
  //   this.myFavorites.push({
  //     Title: newTitle,
  //   });
  // };
  // removeTitle = (item) => {
  //   console.log(item);
  //   //t is a placeholder variable below
  //   this.myFavorites = this.myFavorites.filter((t) => t.Title !== item.Title);
  //   //filtering through task objects in array above^... creates a new array and will not allow through the one thing it's looking for
  // };
}
