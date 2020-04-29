import { Component, OnInit } from '@angular/core';
import { SearchCService } from '../search-c.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
})
// Will the below be needed once we have the API working? If so, how do we incorporate the data from the API into this?
export class FavoritesPageComponent implements OnInit {
  recipe;

  myFavorites: any = [];

  // Need to figure out how to incorporate the below with a "save as favorites" button on another component
  // Routing link?
  // addRecipe = (newRecipe) => {
  //   this.myFavorites.push({
  //     Title: newRecipe,
  //     Calories: newRecipe,
  //     Dietary: newRecipe,
  //     link: newRecipe,
  //   });
  // };
  // The below occurs within this component by using the filter function. Need to incorporate a button on favoritesP component to remove
  removeRecipe = (idx) => {
    console.log(idx);
    this.myFavorites = this.myFavorites.filter((x, item) => idx !== item);
    //We are filtering through objects in array above. This creates a new array and will not allow through the one thing that it's looking for
  };
  constructor(private SearchCService: SearchCService) {}
  ngOnInit() {
    this.SearchCService.getSearchResults().subscribe((res) => {
      const {
        data: { calories, label, healthLabels, url, ingredients },
      } = res;
      this.myFavorites.push({
        Title: label,
        Calories: calories,
        Health: 'healthLabels',
        Servings: res.data.yield,
      });
      console.log('fav data', res);
    });
  }
}
