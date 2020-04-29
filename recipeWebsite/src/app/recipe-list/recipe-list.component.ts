import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchCService } from '../search-c.service';
import { Subject, empty } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  unsubscribe$: Subject<boolean> = new Subject(); //setting up unsubscribe as a type
  constructor(private searchCService: SearchCService, private route: Router) {
    this.searchCService.data.subscribe((res) => {
      console.log('search Results', res);
    });
  }

  searchResults: boolean = false;
  /* mockData: any = {
      title: "Chicken",
      image: "",
      calories: "350",
      ingredients: [],
      url: "",
 }*/
  recipes: any[] = [];

  recipe: any = {};
  //house that the package is being delivered to
  // subscribe = think mag subscription (automatically updates, new package is automatically sent here)
  ngOnInit(): any {
    this.searchCService
      .getSearchResults()
      .pipe(takeUntil(this.unsubscribe$)) //lets the code move freely about the cabin, no more package
      .subscribe((res) => {
        if (Object.entries(res).length === 0) {
          this.searchResults = false;
          this.searchCService.getSearchData((res) => {
            this.recipes = res;
          });
        } else {
          this.searchResults = true;
          this.recipe = res;
          console.log('a', res);
        }
      });
  }

  addToFav() {
    this.searchCService.sendSearchResults(this.recipe);
    this.route.navigateByUrl('/favoritesPage');
  }
}
