import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchCService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    const url = 'http://developer.edamam.com';

    return this.httpClient.get(url);
  }
}
