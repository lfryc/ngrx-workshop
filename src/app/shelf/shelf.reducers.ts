import {Book} from '../books/book';
import {SHELF_ADD_BOOK, SHELF_REMOVE_BOOK, ShelfAction} from './shelf.actions';
import {AppState} from '../app-state';

export interface ShelfState {
  shelvedBooks: { [id: string]: Book };
}

export const initialState: ShelfState = {
  shelvedBooks: {}
};

export function shelfReducer(state = initialState, action: ShelfAction) {

  let { payload: book } = action;

  switch (action.type) {

    case (SHELF_ADD_BOOK):
      book = action.payload;
      return {
        ...state,
        shelvedBooks: {
          ...state.shelvedBooks,
          [book.id]: book,
        }
      };

    case (SHELF_REMOVE_BOOK):
      book = action.payload;
      return {
        shelvedBooks: {
          ...state.shelvedBooks,
          [book.id]: undefined
        }
      };

    default:
      return state;
  }
}

export const getShelvedBooks = (state: AppState) => state.shelf.shelvedBooks;
