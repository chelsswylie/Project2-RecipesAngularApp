import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchCService {
  constructor(private httpClient: HttpClient) {}
  searchResults$: BehaviorSubject<any> = new BehaviorSubject({}); //create mailman (behavior subject is they type of mailman)

  apiID = 'd67f6c5f';
  apiKey = 'c506b3eaee3bfa690e8bfe3b2db09c1b';

  getSearchData(params) {
    console.log('These are params', params);
    let url = `https://api.edamam.com/search?q=${params.primary.toLowerCase()}&app_id=${
      this.apiID
    }&app_key=${this.apiKey}&calories=100-${params.calSlider}.00`;
    Object.keys(params).map((key) => {
      if (params[key] === true) {
        console.log('params', key);
        url += `&exclude=${key}`;

        console.log(url);
      }
    });
    return this.httpClient.get(url);
  }

  data = this.searchResults$.asObservable(); //asObservable allows (package storage)
  sendSearchResults(result) {
    console.log('this is data "the package"', result);
    this.searchResults$.next(result); //mailman is delivering package (mailman needs 2 functions, send and receive)
  }
  getSearchResults(): Observable<any> {
    return this.searchResults$.asObservable(); //package is stored (as Observable creates a mailbox)
  }
}

// Object.keys(params).forEach((key) => console.log(key.valueOf()));
// for (let key of params) {
//   console.log('value', key);
// }
