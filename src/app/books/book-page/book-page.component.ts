import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BookSearchService} from '../book-search.service';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Book} from '../book';
import {AppState} from '../../app-state';
import {Store} from '@ngrx/store';
import {getBookSearchResults} from '../book.reducers';
import {BookSearch, BookSearchResult} from '../book.actions';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'a-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPageComponent implements OnInit {

  queryTitleFormControl = new FormControl();

  constructor(
    private bookSearch: BookSearchService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.queryTitleFormControl.valueChanges
      .debounceTime(500)
      .filter((query: string) => query.length > 2)
      .distinctUntilChanged()
      .do((query) => {
        this.store.dispatch(new BookSearch(query));
      })
      .switchMap((query) => {
        return this.bookSearch.searchForBooks(query);
      })
      .subscribe((books) => {
        this.store.dispatch(new BookSearchResult(books));
      });
  }

}
