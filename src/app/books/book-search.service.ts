import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Book} from './book';

@Injectable()
export class BookSearchService {

  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(
    private http: HttpClient
  ) {}

  searchForBooks(queryTitle: string): Observable<Book[]> {
    return this.http
      .get(`${this.API_PATH}?q=${queryTitle}`)
      .map((res: any) => res.items || []);
  }
}
