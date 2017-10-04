import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormControl} from '@angular/forms';
import {BookSearchService} from '../book-search.service';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Book} from '../book';
import {AppState} from '../../app-state';
import {Store} from '@ngrx/store';
import {getBookSearchResults} from '../book.reducers';
import {BookSearch, BookSearchResult} from '../book.actions';

@Component({
  selector: 'a-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPageComponent implements OnInit {

  queryTitleFormControl = new FormControl();

  fetchingBooks$ = new BehaviorSubject<boolean>(false);

  queryResults$ = this.queryTitleFormControl.valueChanges
    .debounceTime(500)
    .filter((query: string) => query.length > 2)
    .distinctUntilChanged()
    .do((query) => {
      console.log(`Querying ${query}`);
      this.fetchingBooks$.next(true);
    })
    .switchMap((query) => {
      return this.bookSearch.searchForBooks(query);
    })
    .do((books) => {
      this.fetchingBooks$.next(false);
    })
    .share();

  constructor(
    private bookSearch: BookSearchService
  ) {}

  ngOnInit() {

  }

}
