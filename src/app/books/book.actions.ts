
import {Action} from '@ngrx/store';
import {Book} from './book';

export const BOOK_SEARCH = '[Book] Search';
export const BOOK_SEARCH_RESULT = '[Book] Search Result';

export class BookSearch implements Action {
  readonly type = BOOK_SEARCH;
  constructor(public payload: { queryTitle: string }) {};
}

export class BookSearchResult implements Action {
  readonly type = BOOK_SEARCH_RESULT;
  constructor(public payload: Book[]) {}
}

export type BookAction =
  | BookSearch
  | BookSearchResult;
