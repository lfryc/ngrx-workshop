import {BooksState} from './books/book.reducers';
import {ShelfState} from './shelf/shelf.reducers';
import {RouterReducerState} from '@ngrx/router-store';
import {RouterStateUrl} from './app.reducers';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  books: BooksState;
  shelf: ShelfState;
}
