import {BooksState} from './books/book.reducers';
import {ShelfState} from './shelf/shelf.reducers';
import {RouterReducerState} from '@ngrx/router-store';
import {RouterStateUrl} from './app.reducers';

export interface AppState {
  books: BooksState;
  shelf: ShelfState;
}
