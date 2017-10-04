
import {Book} from './book';
import {BOOK_SEARCH, BOOK_SEARCH_RESULT, BookAction} from './book.actions';
import {AppState} from '../app-state';

export interface BooksState {
  searchInProgress: boolean,
  searchResults: Book[];
}

export const initialState: BooksState = {
  searchInProgress: false,
  searchResults: []
};

export function bookReducer(state = initialState, action: BookAction): BooksState {
  switch (action.type) {

    case BOOK_SEARCH:
      console.log(`Querying ${action.payload}`);
      return {
        ...state,
        searchInProgress: true,
      };

    case BOOK_SEARCH_RESULT:
      return {
        ...state,
        searchInProgress: false,
        searchResults: action.payload
      };

    default:
      return state;
  }
}

export const getBookSearchInProgress = (state: AppState) => state.books.searchInProgress;
export const getBookSearchResults = (state: AppState) => state.books.searchResults;
