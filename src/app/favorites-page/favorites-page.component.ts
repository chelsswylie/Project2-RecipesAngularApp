import { Component, OnInit } from '@angular/core';
import { SearchCService } from '../search-c.service';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
})
// Will the below be needed once we have the API working? If so, how do we incorporate the data from the API into this?
export class FavoritesPageComponent implements OnInit {
  recipe;

  myFavorites: any = [];

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
        data: { calories, label, image, source },
      } = res;
      this.myFavorites.push({
        Title: label,
        Calories: calories,
        Servings: res.data.yield,
        Image: image,
        Warning: res.data.cautions,
        Diet: res.data.dietLabels,
        Health: res.data.healthLabels,
        Sauce: source,
        Link: res.data.url,
      });
      console.log('fav data', res);
    });
  }
}
