import { Injectable } from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {BOOK_SEARCH, BookSearch, BookSearchResult} from './book.actions';
import {BookSearchService} from './book-search.service';

@Injectable()
export class BookEffects {

  @Effect()
  searchForBooks$ = this.actions
    .ofType<BookSearch>(BOOK_SEARCH)
    .map(action => action.payload.queryTitle)
    .debounceTime(500)
    .filter((query: string) => query.length > 2)
    .distinctUntilChanged()
    .switchMap((query) => {
      return this.bookSearch.searchForBooks(query);
    })
    .map((books) => new BookSearchResult(books));

  constructor(
    private actions: Actions,
  private bookSearch: BookSearchService,
  ) { }

}
