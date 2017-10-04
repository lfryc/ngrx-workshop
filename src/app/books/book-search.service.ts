import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Book} from './book';

@Injectable()
export class BookSearchService {

  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(
  ) {}

  searchForBooks(queryTitle: string): Observable<Book[]> {
  }
}
