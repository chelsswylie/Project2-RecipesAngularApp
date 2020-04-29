import { Component, OnInit } from '@angular/core';
import { SearchCService } from '../search-c.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { from } from 'rxjs';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  slider: '';
  hasSearchResults: false;
  searchResults: any[];

  //range Slider//
  formatLabel(value: number) {
    if (value >= 1500) {
      return Math.round(value / 1500) + 'k';
    }

    return value;
  }

  constructor(private searchCService: SearchCService, private route: Router) {}

  ngOnInit(): void {}

  onSubmit(form?: NgForm) {
    console.log('form', form.value);
    this.searchCService.getSearchData(form.value).subscribe((res: any) => {
      console.log('response data', res);

      this.searchResults = res?.hits;
    });
  }

  handleRoute(recipe) {
    console.log('this is for recipe', recipe);
    this.searchCService.sendSearchResults({
      //mailman sending package
      //service "fruit service"
      data: recipe, //info to pass
    });
    this.route.navigateByUrl('/recipeList'); //send to actual page
  }
}
