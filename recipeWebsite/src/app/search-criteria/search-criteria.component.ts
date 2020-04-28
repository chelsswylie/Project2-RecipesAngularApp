import { Component, OnInit } from '@angular/core';
import { SearchCService } from '../search-c.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  responseData: any;
  filterIngredients: string = '';
  filterText: string = ' ';
  hasSearchResults: false;

  constructor(private searchCService: SearchCService) {}

  ngOnInit(): void {}

  //searchButton - add function
  // this.searchCService.getData().subscribe((response) => {
  //   this.responseData = response;
  //   this.hasSearchResults = true;
  //   console.log(this.responseData);
  // });
  //responceData -> ngif

  //List from input -> Push To array

  //
}
