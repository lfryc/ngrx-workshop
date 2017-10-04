import {BooksState} from './books/book.reducers';
import {ShelfState} from './shelf/shelf.reducers';

export interface AppState {
  books: BooksState;
  shelf: ShelfState;
}
